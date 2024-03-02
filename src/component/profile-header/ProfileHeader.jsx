import {BiEdit} from 'react-icons/bi'
import "./PofileHeader.css"
const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <h1 className="profile-title">Profile</h1>
            <div className="edit-profile">
                <BiEdit className="icon"/>
            </div>
        </div>
    )
}

export default ProfileHeader
