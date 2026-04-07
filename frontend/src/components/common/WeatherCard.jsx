function WeatherCard({ city }) {
  return (
    <article className={`weather-card weather-card--${city.accent}`}>
      <div className="weather-card__top">
        <div>
          <p className="weather-card__country">{city.country}</p>
          <h3 className="weather-card__city">
            <span className="weather-card__flag" aria-hidden="true">
              {city.flag}
            </span>
            <span>{city.city}</span>
          </h3>
        </div>
        <p className="weather-card__time">{city.localTime}</p>
      </div>

      <div className="weather-card__hero">
        <div>
          <p className="weather-card__condition">{city.condition}</p>
          <p className="weather-card__summary">{city.summary}</p>
        </div>
        <p className="weather-card__temp">{city.temperature}&deg;</p>
      </div>

      <div className="weather-card__metrics">
        <div>
          <span>High / Low</span>
          <strong>
            {city.high}&deg; / {city.low}&deg;
          </strong>
        </div>
        <div>
          <span>Humidity</span>
          <strong>{city.humidity}%</strong>
        </div>
        <div>
          <span>Wind</span>
          <strong>{city.wind} km/h</strong>
        </div>
      </div>
    </article>
  );
}

export default WeatherCard;
