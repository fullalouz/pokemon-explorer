import React from 'react';

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header-container">
      <div className="bg-pokeball bg-pokeball-left"></div>
      <div className="bg-pokeball bg-pokeball-right"></div>

      <div className="header-top">
        <div className="brand-left">
          <svg className="react-logo" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#38BDF8"/>
            <g stroke="#38BDF8" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span className="brand-text">
            <strong>omarsebah1</strong> <span className="divider">|</span> learn <span className="react-blue">Reactjs</span>
          </span>
        </div>

        <div className="pokeball-top-right">
          <div className="pokeball-icon-small"></div>
        </div>
      </div>

      <div className="header-center">
        <h1 className="title">
          <span className="sparkles">💥</span>
          <div className="pokeball-title-icon"></div>
          <span>Pokémon <span className="title-blue">Explorer</span></span>
        </h1>
        <p className="subtitle">Discover your favorite Pokémon!</p>
      </div>

      {/* شريط البحث الممركز المعتلي للإطار الكحلي */}
      <div className="search-wrapper">
        <span className="search-btn">🔍</span>
        <input
          type="text"
          placeholder="Search for a Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
}