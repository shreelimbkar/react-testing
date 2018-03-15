import React from 'react';

const Single = ({item}) => {
  return (
    <div className="border w-25 p-3 m-1 mx-auto">
        <img className="card-img-top" src={item.Poster} alt={item.Title} />
        <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <p className="card-text">{item.Plot}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Actors: {item.Actors}</small>
            <p><a href={item.Website} target="_blank">Link to movie</a></p>
        </div>
    </div>
  );
};

export default Single;
