import { useAuth0 } from "@auth0/auth0-react";
import Avatar from 'react-avatar';
import JSONPretty from 'react-json-pretty';

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth0();

    return (
      isAuthenticated && ( 
       <div className="profile">
         <h4>Hi {user.nickname},</h4>
         <h2>Welcome Back!</h2>
         <Avatar src={user.picture} size="100" round={true} />
          {/* <img src={user.picture} alt={user.name} /> */}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <JSONPretty data={user} />
        </div>
      )
  );
}
