import React, { useEffect, useState } from 'react';

function LastGame(props) {
  const [latestGame, setLatestGame] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        // Obtener el número total de juegos
        const gamesResponse = await fetch('http://localhost:3060/api/games/');
        const gamesData = await gamesResponse.json();
        const totalGames = gamesData.totalGames;

        // Obtener el último juego
        const latestGameResponse = await fetch(`http://localhost:3060/api/games/${totalGames}`);
        const latestGameData = await latestGameResponse.json();
        
        setLatestGame(latestGameData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchGameData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        
        <div className="col-lg-6 mb-4" style={{ marginLeft: "100px", marginTop: "30px"}}>
          <div className="card shadow mb-4">
            
          <div className="card-body">
          <h2>El ultimo juego de la db</h2>
          <div className="text-center">
          <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "40rem" }}
                src={latestGame.imageUrl}
                alt=" Star Wars - Mandalorian "
              />
              </div>
          <p>Nombre: {latestGame.name}</p>
          <p>{latestGame.description}</p>
          <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              View movie detail
            </a>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LastGame;
