import React, { useState, useEffect } from "react";
import Movie from './Movie';
import axios from 'axios';


function Main(){
    const [searchTerm, setSearchTerm ] = useState("")
    const [movies, setMovies] = useState([]);

    const searchKey = process.env.REACT_APP_SEARCH_KEY;
    const key = process.env.REACT_APP_FEATURE_KEY;

    useEffect(() => {
        axios.get(key)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        })
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchTerm){
            axios.get(searchKey + searchTerm)
            .then((res) => {
                console.log(res.data.results)
                setMovies(res.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
        setSearchTerm("");
    }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return(
        <div className="header-container">
            <div className="header">
                <form onSubmit={handleSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search Movies"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </form>
            </div>
            {movies.length > 0 && movies.map((movie) =>
                <Movie key={movie.id} {...movie} />
            )}
        </div>
    )
}

export default Main 