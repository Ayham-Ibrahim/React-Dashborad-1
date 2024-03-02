import { BiNotification, BiSearch } from "react-icons/bi"
import "./ContentHeader.css";
const ContentHeader = () => {
  return (
    <div className="content-header">
        <h1 className="content-title">Dashboard</h1>
        <div className="header-activity">
            <div className="search-box">
                <input type="text" placeholder="Search for anything ..." />
                <BiSearch className="icon"/>
            </div>
            <div className="notification">
                <BiNotification className="icon"/>
            </div>
        </div>
    </div>
  )
}

export default ContentHeader
