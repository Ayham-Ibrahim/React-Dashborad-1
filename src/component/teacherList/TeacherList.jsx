import "./TeacherList.css";
import Image from "../../assets/image.jpg"; 
const teachers = [
    {
        image: Image,
        name:'Ayahm Ibrahim',
        duration:'20 hours lesson',
        cost:'100',
    },
    {
        image: Image,
        name:'Ayahm Ibrahim',
        duration:'20 hours lesson',
        cost:'100',
    },
    {
        image: Image,
        name:'Ayahm Ibrahim',
        duration:'20 hours lesson',
        cost:'100',
    },
    {
        image: Image,
        name:'Ayahm Ibrahim',
        duration:'20 hours lesson',
        cost:'100',
    },

];
const TeacherList = () => {
  return (
    <div className="teacher-container">
      <div className="teacher-header">
        <h2>Teacher</h2>
        <select className="language">
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
      <div className="teacher-list">
        {teachers.map(({image,name,duration,cost},index)=>{
          return (
            <div className="list"  key={index}>
              <div className="teachr-info">
                <img src={image} alt="" />
                <h2 className="teacher-name">{name}</h2>
              </div>
              <span className="course-duration">{duration}</span>
              <span className="cost">${cost}/hr.</span>
              <span className="teacher-todo">:</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default TeacherList
