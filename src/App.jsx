import { useState, useEffect } from 'react';
import './App.css';
import searchIcon from './assets/searchIcon.svg';
import FilmCard from './composants/FilmCard';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=74a55880';

const App = () => {

  //on declare 2 state : films et searchFilm
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState([]);

  //fonction asynchrone pour recherche des films
const rechercheFilms = async(titre)=> {
  //on effectue une requete get a l'api en utilisant le titre du film comme param
  const response = await fetch(`${API_URL}&s=${titre}`);
  //on recupere les données sous forme de json
  const data = await response.json();
  console.log(data);
  //on met à jour le state
  setFilms(data.Search);
}

//on utilise le useEffect pour executer la fonction recherchefilms une fois lors du rendu initial
useEffect(() => {
  rechercheFilms('batman');
}, []);
  
  return (
    <div className='app'>
     <h1>MOOVIES</h1>
      <div className='search'>
        <input type='text' placeholder='Rechercher votre film' value={searchFilm} onChange={(e) => setSearchFilm(e.target.value)}
        />
        <img 
        src={searchIcon}
        alt="Search"
        onClick={() => rechercheFilms(searchFilm)}
        />
      </div>

      {
        //on verifie si la liste des films est vide ou non
        films.length > 0 ? (
          //si des films sont trouvés on les affiche dans le conteneur
          <div className='container'>
          {films.map((film) => (
            <FilmCard film={film}/>
          ))}
          </div>
        ) : (
          //si aucun film n'est trouvé on affiche un message
          <div className='empty'>
          <h2>Nous n'avons pas ce film.</h2>
          </div>
        )
      }
    </div>
  );
}

export default App
