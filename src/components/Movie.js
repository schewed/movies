import React from "react";

const Movie = (props) => {
  return (
    <div className="lines">
      <div className="greenbtn p2-a">
        {props.movie.title}
      </div>
      <div className="lines p2-a">

        <ol className="col">
          <li><span className="bold">Year:</span>{props.movie.year}</li>
          <li><span className="bold">Runtime:</span> {props.movie.runtime}</li>
          <li><span className="bold">Metascore:</span> {props.movie.metascore}</li>
          <li><span className="bold">imdbRating:</span> {props.movie.imdbRating}</li>
          <li><span className="bold">Watched:</span> {props.movie.watched}
            <button onClick={() => props.toggleWatched(props.movie)} className={`f-r ${props.movie.watched ? "greenbtn" : "graybtn" }`}>Watched</button>
          </li>
        </ol>
        <div className="col">
          <img src="https://cdn.pixabay.com/photo/2019/10/29/16/43/rope-4587474__480.jpg"/>
        </div>
      </div>


    </div>
  );
};

export default Movie;
