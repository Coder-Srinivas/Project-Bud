import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div className="navbar">
      <img src="Images/logo.png" alt="logo" className="navbar-logo" />
      <div className="navbar-buttons">
        {isAuthenticated ? (
          <button className="btn-spl btn" onClick={() => logout()}>
            <a>
              <Icon icon="fa-solid:sign-out-alt" /> Log out
            </a>
          </button>
        ) : (
          <button className="btn" onClick={() => loginWithRedirect()}>
            <a>Log in</a>
          </button>
        )}
        {isAuthenticated && (
          <button className="btn-spl btn btn-profile">
            <a href="/profile">Profile</a>
          </button>
        )}
      </div>
    </div>
  );
}
