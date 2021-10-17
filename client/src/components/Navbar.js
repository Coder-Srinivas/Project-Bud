import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';

export default function Navbar() {
    const { logout, isAuthenticated, loginWithRedirect } = useAuth0();
    return (
        <div className="navbar">
            <a href="/" className="navbar-logo"><img  className="navbar-logo--inside" src="Images/logo2.png" alt="logo"/></a>
            <div className="navbar-buttons">
            {isAuthenticated?(<button className="btn-spl btn" onClick={() => logout()}>
           <Icon icon="fa-solid:sign-out-alt"/>   Log out
            </button>)
            :(<button className="btn" onClick={() => loginWithRedirect()}>Log in</button>)}
            {isAuthenticated&&(<button className="btn-spl btn btn-profile"><a href="/profile"><Icon icon="fa-solid:user"/>  Profile</a></button>)}
            </div>
        </div>
    )
}
