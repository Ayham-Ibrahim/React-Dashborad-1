import "./Card.css";
import {BiBuilding, BiLogoAndroid, BiLogoHtml5} from 'react-icons/bi';
const cources = [
    {
        title:'Web Development',
        icon:<BiLogoHtml5/>,
    },
    {
        title:'App Development',
        icon:<BiLogoAndroid/> ,
    },
    {
        title:'Ux/UI',
        icon: <BiBuilding/> ,
    }
];
const Card = () => {
  return (
    <div className="card-container">
        {cources.map(({title,icon},index) =>{
            return (
                <div className="card" key={index}>
                    <div className="card-icon">{icon}</div>
                    <div className="card-title">{title}</div>
                </div>
            );
        }
        )}
    </div>
  )
}

export default Card
