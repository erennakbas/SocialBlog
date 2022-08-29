import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../features/userSlice";
import { useDispatch } from "react-redux";
import BlogFunctions from "../services/blog.functions";
const Nav = () => {
  const dispatch = useDispatch()
  const blogFunctions = BlogFunctions.create()
  const isAuthenticated = useSelector(selectIsAuthenticated);
  function handleLogout() {
    if (typeof window !== "undefined") {
      blogFunctions.logout(dispatch);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <Link className="navbar-brand me-2" href="/">
          <button>
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </button>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link href="/" className="nav-item">
              <a className="nav-link">Main Page</a>
            </Link>
          </ul>

          <div className="d-flex align-items-center">
            {isAuthenticated ? (
              <Link href="/">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn-primary me-3"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <button type="button" className="btn btn-primary me-3">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button type="button" className="btn btn-primary me-3">
                    Signup
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
