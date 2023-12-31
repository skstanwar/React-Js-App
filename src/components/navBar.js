import { Outlet , Link } from "react-router-dom";
function Navbar(){
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link   className="navbar-brand" to="#">
    Navbar
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link   className="nav-link" to="#">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link   className="nav-link" to="#">
          Features
        </Link>
      </li>
      <li className="nav-item">
        <Link   className="nav-link" to="#">
          Pricing
        </Link>
      </li>
    </ul>
  </div>
</nav>
<Outlet />

</>)
}
export default Navbar;