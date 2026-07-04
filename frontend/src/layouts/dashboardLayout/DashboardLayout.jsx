import { Outlet } from "react-router-dom"


const DashboardLayout = () => {
  return (
    <div className="./dashboardlayout.css">
        <div className="menu">menu</div>
      <div className="content">
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout