import React from "react"

const FilmCard = ({film}) => {
  return (
    <div className="film">
        <p className="film-date">{film.Year}</p>
        <img
        src={film.Poster !== 'N/A' ? film.Poster : 'https://via.placeholder.com/300'}
        alt={film.Title}
        className="film-img" />
      <div className="filter"></div>
      <div className="film-info">
      <span>{film.Type}</span>
      <h3>{film.Title}</h3>
      </div>
    </div>
  )
}

export default FilmCard
