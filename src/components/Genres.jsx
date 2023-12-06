import React, { Component } from 'react';

class Genres extends Component {
  constructor() {
    super();
    this.state = {
      genresList: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3060/api/gamescategory')
      .then((response) => response.json())
      .then((data) => {
        // Extraer solo las categorías y guardarlas en el estado
        const categories = data.categoriesWithGames.map((category) => category.category);
        this.setState({ genresList: categories });
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Generos en la base de datos</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {this.state.genresList.map((genre, index) => (
                <div key={index} className="col-lg-6 mb-4">
                  <div className="card bg-dark text-white shadow">
                    <div className="card-body">{genre}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
