import ProfileHeader from "../profile-header/ProfileHeader"
import "./Profile.css";
import Image from '../../assets/image.jpg';
import { BiBook } from "react-icons/bi";


const cources = [
  {
    title:"PHP",
    icon :<BiBook/>,
    duration: "5 Hours",

  },
  {
    title:"Javascript",
    icon :<BiBook/>,
    duration: "4 Hours",

  },
  {
    title:"React.js",
    icon :<BiBook/>,
    duration: "3 Hours",

  },
  {
    title:"Laravel",
    icon :<BiBook/>,
    duration: "4 Hours",

  },
];
const Profile = () => {
  return (
    <div className="profile">
        <ProfileHeader/>
        <div className="profile-content">
          <div className="user-details">
            <img src={Image} alt="" />
            <h2 className="user-name">Ayham Ibrahim</h2>
            <span>Web Developer</span>
          </div>
          <div className="user-cources">
                {cources.map(({title,icon,duration},index)=>{
                  return (
                    <div className="cources" key={index}>
                      <div className="cource-detail">
                        <div className="cource-icon">{icon}</div>
                        <div className="cource-name">
                          <h5 className="title">{title}</h5>
                          <span className="duration">{duration}</span>
                        </div>
                      </div>
                      <div className="action">:</div>
                    </div>
                  );
                })}
          </div>
        </div>
    </div>
  )
}

export default Profile
