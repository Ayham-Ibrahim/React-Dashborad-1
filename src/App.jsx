import './App.css'
import Content from './component/content/Content'
import Profile from './component/profile/Profile'
import Sidebar from './component/sidbar/Sidebar'

function App() {

  return (
      <div className='dashboard'>
        <Sidebar/>
        <div className="dashboard-content">
          <Content/>
          <Profile/>
        </div>
      </div>

  )
}

export default App
