export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          React Movies
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/geners" className="nav-link">
                Geners
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
