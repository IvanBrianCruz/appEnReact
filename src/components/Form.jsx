import React, { useRef } from 'react'

export default function Form() {

    const form =  useRef();

    const handlerValidation = (e) =>{
        e.preventDefault()
        const [ name, value ] = e.target;

        let [inputs] = [{...form.current, [name]: value}];


        console.log(inputs[5])

    }



  return (
    <>
  {/* Hello world */}
  <form ref={form} className="form" action="/movies/create" method="GET" onSubmit={handlerValidation}>
    <label htmlFor="title">Titulo </label>
    <div>
      <input type="text" name="title" id="title" className="form-control" />
    </div>
    <label htmlFor="rating">Calificación </label>
    <div>
      <input
        type="number"
        name="rating"
        id="rating"
        className="form-control"
        placeholder="Indicar valor entre 0 y 10"
      />{" "}
    </div>
    <label htmlFor="awards">Premios </label>
    <div>
      <input
        type="number"
        name="awards"
        id="awards"
        className="form-control"
        placeholder="Indicar valor entre 0 y 10"
      />
    </div>
    <label htmlFor="release_date">Fecha de creación </label>
    <div>
      <input
        type="date"
        name="release_date"
        id="release_date"
        className="form-control"
      />
    </div>
    <label htmlFor="length">Duración </label>
    <div>
      <input
        type="number"
        name="length"
        id="length"
        className="form-control"
        placeholder="Indicar duración entre 60 y 360 minutos"
      />
    </div>
    {/* <label htmlFor="genreID">Género </label>
    <div>
      <select name="genre_id" id="genre_id" className="form-select">
        <option value="" disabled="" selected="">
          - Seleccione el género -{" "}
        </option>
        &lt;% allGenres.forEach(genre =&gt; {"{"} %&gt;
        <option value="<%= genre.id %>">&lt;%= genre.name %&gt;</option>
        &lt;% {"}"}); %&gt;
      </select>
    </div> */}
    <br />
    <div>
      {" "}
      <button className="botonAgregar" type="submit">
        Agregar
      </button>
      <a className="botonVolver" href="/movies">
        Listado de Películas
      </a>
    </div>
  </form>
</>

  )
}
