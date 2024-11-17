import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"

function Root() {

  return (
    <>
      <div className=" md:mx-20">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Root
