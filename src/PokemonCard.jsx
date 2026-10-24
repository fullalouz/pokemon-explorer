import React from 'react';
import { typeColors } from './typeColors';

export default function PokemonCard({ pokemon }) {
  const typeStyle = typeColors[pokemon.type] || typeColors.default;

  return (
    <div className="pokemon-card">
      <div className="card-img-wrap">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <div
        className="type-badge"
        style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}
      >
        <span className="badge-icon">{typeStyle.icon}</span>
        <span>{pokemon.type}</span>
      </div>
    </div>
  );
}