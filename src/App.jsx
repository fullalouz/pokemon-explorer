import { useState, useEffect } from 'react';
import Header from './Header';
import PokemonCard from './PokemonCard';
import './App.css';

const SPECIFIC_POKEMON = [
  'pikachu',
  'bulbasaur',
  'charmander',
  'squirtle',
  'eevee',
  'jigglypuff',
  'gengar',
  'snorlax'
];

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      setError(null);

      const details = await Promise.all(
        SPECIFIC_POKEMON.map(async (name) => {
          const detailRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          if (!detailRes.ok) throw new Error('Failed to load');
          const detailData = await detailRes.json();
          return {
            id: detailData.id,
            name: detailData.name.charAt(0).toUpperCase() + detailData.name.slice(1),
            image: detailData.sprites.other['official-artwork'].front_default || detailData.sprites.front_default,
            type: detailData.types[0]?.type?.name || 'normal',
          };
        })
      );

      setPokemonList(details);
    } catch (err) {
      setError('Failed to load Pokémon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonList.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="content-area">
        <div className="pokemon-grid">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

        <div className="status-row">
          <div className="status-card loading-card">
            <div className="spinner"></div>
            <div className="status-text">
              <h4>Loading Pokémon...</h4>
              <p>Please wait a moment.</p>
            </div>
          </div>

          <div className="status-card error-card">
            <div className="error-left">
              <span className="error-icon">⚠️</span>
              <div className="status-text">
                <h4>Failed to load Pokémon</h4>
                <p>Please try again later.</p>
              </div>
            </div>
            <button className="try-btn" onClick={fetchPokemon}>Try Again</button>
          </div>
        </div>
      </main>
      <footer className="footer-wrapper">
        <div className="footer-wave-svg">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              d="M0,40 C320,90 480,10 720,50 C960,90 1120,20 1440,50 L1440,120 L0,120 Z" 
              fill="#DCE9F6"
            />
          </svg>
        </div>
        <div className="footer-content">
          <div className="footer-line"></div>
          <div className="footer-pokeball"></div>
          <div className="footer-line"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;