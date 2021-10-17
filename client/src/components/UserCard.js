import Avatar from 'react-avatar';
import { Icon } from '@iconify/react';

export default function UserCard({name, interests, skills, preferences, others, picture}) {
    return (
        <div className="user-card">
          <div className="user-card--inside">
          <Avatar src={picture} size="100" round={true} />
          <h2 className="user-card--inside-head">{name}</h2>
          <h4 className="user-card--inside-sub">{preferences}</h4>
          <div className="user-card--inside-2">
          <h2 className="user-card--inside-head">Skills: {skills}</h2>
          <h3 className="user-card--inside-sub">Interests: {interests}</h3>
          {others&&<h3 className="user-card--inside-sub">Others: {others}</h3>}
          <h4 className="profile--user-sub2 right-swipe">
          <button className="btn-swipe">
          <Icon icon="mdi:gesture-swipe-right"/>Right Swipe Me!</button></h4>
          </div>
          </div>
        </div>
    )
}
