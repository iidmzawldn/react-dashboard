import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const DashboardLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  )
}

export default DashboardLayouts
