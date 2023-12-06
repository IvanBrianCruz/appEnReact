import React, { useState, useEffect } from 'react';

function GamesTable() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchAllGames = async () => {
            try {
                const totalResponse = await fetch('http://localhost:3060/api/games/');
                const totalData = await totalResponse.json();
                const totalGames = totalData.totalGames;

                const gamesDetailsPromises = [];

                for (let i = 1; i <= totalGames; i++) {
                    const response = await fetch(`http://localhost:3060/api/games/${i}`);
                    const gameDetails = await response.json();
                    gamesDetailsPromises.push(gameDetails);
                }

                const gamesWithDetails = await Promise.all(gamesDetailsPromises);
                setGames(gamesWithDetails);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchAllGames();
    }, []);

    return (
        <div className="container">
            <h2>Lista de Juegos</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categoría</th>
                    <th>Imagen</th>
                    <th>Descripción</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.id}</td>
                        <td>{game.name}</td>
                        <td>{game.price}</td>
                        <td>{game.category}</td>
                        <td>
                            <img src={game.imageUrl} alt={game.name} style={{ width: '100px', height: 'auto' }} />
                        </td>
                        <td>{game.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default GamesTable;
