import React, { useState, useEffect } from 'react';
import DataContent from './DataContent';

function ContentRowTop() {
  const [gamesCount, setGamesCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesResponse = await fetch('http://localhost:3060/api/games/');
        const usersResponse = await fetch('http://localhost:3060/api/users/');
        const categoriesResponse = await fetch('http://localhost:3060/api/gamescategory');

        const gamesData = await gamesResponse.json();
        const usersData = await usersResponse.json();
        const categoriesData = await categoriesResponse.json();

        console.log('Games data:', gamesData);
        console.log('Users data:', usersData);
        console.log('Categories data:', categoriesData);

        setGamesCount(gamesData.totalGames);
        setUsersCount(usersData.count);
        setCategoriesCount(categoriesData.uniqueCategoriesCount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const dataBoxes = [
    {
      title: "Total de juegos en la base de datos",
      amount: gamesCount,
      icon: 'fa-gamepad',
      styles: ['border-left-primary', 'text-primary']
    },
    {
      title: "Total de usuarios",
      amount: usersCount,
      icon: 'fa-user',
      styles: ['border-left-success', 'text-success']
    },
    {
      title: "Total de categorias",
      amount: categoriesCount,
      icon: 'fa-list',
      styles: ['border-left-warning', 'text-warning']
    }
  ];

  return (
    <div className="container-fluid">
      {/* ... tu contenido existente ... */}
      <div className="row">
        {dataBoxes.map((dataBox, i) => (
          <DataContent key={i} dataBox={dataBox} />
        ))}
      </div>
      {/* ... más contenido ... */}
    </div>
  );
}

export default ContentRowTop;
