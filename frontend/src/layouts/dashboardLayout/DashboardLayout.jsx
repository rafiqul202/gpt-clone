import { Outlet } from "react-router-dom"
import ChatList from "../../components/chatList/ChatList"
import './dashboardlayout.css';


const DashboardLayout = () => {
  return (
    <div className="dashboardlayout">
        <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout