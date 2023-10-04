import React from "react"
import { NavBar } from "./NavBar"

export const Footer = ( props ) => {
   return <p>
      Yo soy el footer
   </p>
}
export const Layout = ( props ) => {
   return <>
   <NavBar paginaActiva={5}/>
      {React.Children.toArray(props.children)}
   <Footer />
   </>
}