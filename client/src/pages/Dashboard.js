import { useAuth0 } from "@auth0/auth0-react";
import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';
import Card from "../components/UserCard";

export default function Dashboard({data}) {
  const { user, isAuthenticated } = useAuth0();
    return (
      isAuthenticated && ( 
       <div className="profile">
         <div className="profile--user">
         <div className="profile--user-greetings">
         <h4 className="profile--user-sub">Hi {user.nickname},</h4>
         <h2 className="profile--user-head">Welcome Back!</h2>
         </div>
         <div className="profile--user-basic">
         <Avatar src={user.picture} size="100" round={true} />
         <div className="profile--user-basic-gap"></div>
         <div className="profile--user-basic-text">
          <h2 className="profile--user-head">{user.name}</h2>
          <h4 className="profile--user-sub">{user.email}</h4>
          <h4 className="profile--user-sub2">Last seen: {user.updated_at.substring(0,10)}</h4>
          </div>
          </div>
          </div>
          <div className="profile--details">
           <h1 className="profile--details-heading">About Me</h1>
           <div className="profile--details-container">
           <div className="profile--details-container-inside">
            <div className="profile--details-container-inside-con">
           <h2 className="profile--user-head profile--details-head">Interests</h2>
           <p className="profile--details-content" contentEditable="true">Dogs, Development, IceCream, Dark Chocolate <Icon icon="zmdi:edit" />
</p>
           </div>
           <div className="profile--details-container-inside-con">
            <h2 className="profile--user-head profile--details-head">Skills</h2>
            <p className="profile--details-content" contentEditable="true"> Figma, React, HTML, CSS, Leadership <Icon icon="zmdi:edit" />
</p>
            </div>
            </div>
            <div className="profile--details-container-inside">
            <div className="profile--details-conatiner-inside-con">
            <h2 className="profile--user-head profile--details-head">Preferences</h2>
            <p className="profile--details-content" contentEditable="true">I prefer to be called by She/her <Icon icon="zmdi:edit" />
</p>
            </div>
            <div className="profile--details-conatiner-inside-con">
            <h2 className="profile--user-head profile--details-head">Others</h2>
            <p className="profile--details-content" contentEditable="true">Welcome to my profile, lets connect! <Icon icon="zmdi:edit" />
</p>
            </div>
            </div>
            </div>
          </div>
          <div className="profile--connections">
            <h1 className="profile--details-heading">Connected Profiles</h1>
            <div className="profile--connections-inside">
            <Card name="Sarah" interests="Dancing, IceSkating" skills="UI/UX, Typography"
          preferences="They/Them" others="I love teddy bears!" picture="https://i.picsum.photos/id/1014/6016/4000.jpg?hmac=yMXsznFliL_Y2E2M-qZEsOZE1micNu8TwgNlHj7kzs8"/>  
           <Card name="Pedro" interests="IceCream, Football" skills="Figma, Typography"
          preferences="He/Him" others="I like to sing" picture="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"/> 
          </div>
          </div>
        </div>
      )
  );
}
