/*eslint import/no-unresolved: off*/
import React from 'react';

const Single = ({ item }) =>
  <div className="border w-25 p-3 m-1 mx-auto">
    <img className="card-img-top" src={item.Poster} alt={item.Title} />
    <div className="card-body">
      <a href={item.Website} target="_blank" rel="noopener noreferrer" className="card-title">
        { item.Title }</a>
      <p className="m-0"><small><b>Director:</b> {item.Director}</small></p>
      <p className="m-0"><small><b>Actors:</b> {item.Actors}</small></p>
      <p className="m-0"><small><b>Released:</b> {item.Released}, 
        <b>IMDB Rating:</b> {item.imdbRating}</small>
      </p>
    </div>
  </div>;

export default Single;
