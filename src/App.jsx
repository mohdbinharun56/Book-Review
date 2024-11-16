import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"

function Root() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Root
