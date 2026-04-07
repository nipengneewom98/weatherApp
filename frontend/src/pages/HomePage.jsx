import { useState } from 'react';
import { WeatherCard } from '../components';
import { cityForecasts, landingHighlights } from '../constants/app';

function getCardOffset(index, activeIndex, totalCards) {
  let offset = index - activeIndex;

  if (offset > totalCards / 2) {
    offset -= totalCards;
  }

  if (offset < -totalCards / 2) {
    offset += totalCards;
  }

  return offset;
}

function HomePage() {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const featuredCity = cityForecasts[0];

  return (
    <div className="landing-page">
      <section className="forecast-section forecast-section--top">
        <div className="forecast-section__header">
          <div>
            <p className="forecast-section__eyebrow">Current conditions</p>
            <h2>City weather overview</h2>
          </div>
          <p>
            Designed as a responsive card grid so we can swap static values with
            real API data later without changing the page structure.
          </p>
        </div>

        <div className="weather-carousel">
          <div className="weather-carousel__stage">
            {cityForecasts.map((city, index) => {
              const offset = getCardOffset(
                index,
                activeCityIndex,
                cityForecasts.length,
              );

              return (
                <button
                  key={city.city}
                  type="button"
                  className={`weather-carousel__card weather-carousel__card--${offset}`}
                  onClick={() => setActiveCityIndex(index)}
                  aria-pressed={offset === 0}
                  aria-label={`Show ${city.city} weather card`}
                >
                  <WeatherCard city={city} />
                </button>
              );
            })}
          </div>

          <div className="weather-carousel__footer">
            <p>Click a card behind the front one to bring it forward.</p>
            <div className="weather-carousel__dots" aria-label="Weather cities">
              {cityForecasts.map((city, index) => (
                <button
                  key={city.city}
                  type="button"
                  className={`weather-carousel__dot${
                    index === activeCityIndex ? ' is-active' : ''
                  }`}
                  onClick={() => setActiveCityIndex(index)}
                  aria-label={`Go to ${city.city}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero-panel">
        <div className="hero-panel__content">
          <div className="hero-panel__topbar">
            <p className="hero-panel__kicker">Five-city live board</p>
            <div className="hero-panel__status">
              <span className="hero-panel__status-dot" />
              Demo data
            </div>
          </div>

          <h2>Weather that feels global at a glance.</h2>
          <p className="hero-panel__lead">
            A polished landing page concept for checking current conditions
            across Tokyo, Jakarta, Los Angeles, Havana, and Lisbon.
          </p>

          <ul className="hero-panel__highlights">
            {landingHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero-panel__stats">
            <div>
              <span>Tracked cities</span>
              <strong>5</strong>
            </div>
            <div>
              <span>Warmest now</span>
              <strong>Jakarta 31&deg;</strong>
            </div>
            <div>
              <span>Coolest now</span>
              <strong>Lisbon 19&deg;</strong>
            </div>
          </div>
        </div>

        <aside className="hero-spotlight">
          <div className="hero-spotlight__glow" />
          <p className="hero-spotlight__label">Featured city</p>
          <h3>{featuredCity.city}</h3>
          <p className="hero-spotlight__temp">
            {featuredCity.temperature}&deg;
          </p>
          <p className="hero-spotlight__condition">{featuredCity.condition}</p>
          <p className="hero-spotlight__summary">{featuredCity.summary}</p>
          <div className="hero-spotlight__meta">
            <span>High {featuredCity.high}&deg;</span>
            <span>Low {featuredCity.low}&deg;</span>
            <span>{featuredCity.localTime} local</span>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default HomePage;
