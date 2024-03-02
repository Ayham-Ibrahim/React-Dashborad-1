import Card from "../card/Card";
import ContentHeader from "../content-header/ContentHeader"
import TeacherList from "../teacherList/TeacherList";
import "./Content.css";
const Content = () => {
  return (
    <div className="content">
        <ContentHeader/>
        <Card/>
        <TeacherList/>
    </div>
  )
}

export default Content
