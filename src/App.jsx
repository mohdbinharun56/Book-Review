import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Root() {

  return (
    <>
      <div className=" md:mx-20">
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer />
      </div>
    </>
  )
}

export default Root
