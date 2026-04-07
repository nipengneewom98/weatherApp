function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div className="app-shell__brandbar">
          <div>
            <p className="app-shell__eyebrow">Global Weather Landing Page</p>
            <h1>WeatherApp</h1>
          </div>
          <div className="app-shell__pill">Premium climate briefing</div>
        </div>
        <p className="app-shell__subtitle">
          Track the atmosphere across iconic cities with a refined weather
          interface designed for clarity, mood, and fast comparison.
        </p>
      </header>

      <main className="app-shell__main">{children}</main>
    </div>
  );
}

export default AppShell;
