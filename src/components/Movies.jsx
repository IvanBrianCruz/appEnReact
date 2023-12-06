/**
 * 
 * useState: Nos permite manejar estados en el componente, donde al cambiar vuelve a renderizar
 * el componente para reflejar en la interfaz ese  cambio 
 * 
 * useEffect: Ejecutar efectos - Hook que nos permite ejecutar codigo arbitrario ( lo que quieras )
 * cuando se monta el componente en el DOM y/o cambian sus dependencias
 */

import { useEffect, useState } from "react";

function Movies(){
    const initialSate = {
        page: 1,
        limit: 5,
        offset: 0
    }

    const [moviesList, setMoviesList] = useState();

    const [ paging, setPaging ] = useState(initialSate);


    const getMovies = async() =>{
        const resp = await fetch('http://localhost:3031/api/movies/');
        const data = await resp.json()
        return data
    }

    useEffect(  () =>{
        
        setTimeout(() =>{
            
            getMovies()
            .then(({data})  => setMoviesList(data))
        }, 1000)

    },[paging.page])

    const handleNext = () =>{
        setPaging({
            page: paging.page + 1,
            limit: paging.limit || 5,
            offset:  paging.limit * paging.page - 1
        })
    }

    if( moviesList.length === 0){ 
        return <h2>Cargando</h2>
     }

    return(
        <div  id="content-wrapper" className="d-flex flex-column">
            {/* <h3>{ count }</h3>
            <button onClick={() => setCount( count + 1)} >
                Aumentar
            </button> */}
            <ul>
                {
                    moviesList.map((elem, i) =>{
                        return(i >= paging.offset && i <= (paging.offset + paging.limit) )
                            && (
                                <li key={i}>
                                    {elem.title}
                                </li>
                            )
                            
                            
                        
                    } ) 
                }
            </ul>
            <div>
                <span>{ paging.page }</span>
            </div>
            <button onClick={handleNext} >Seguiente</button>
        </div>
    )

}

export default Movies;