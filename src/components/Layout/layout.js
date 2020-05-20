import React from "react"
import PropTypes from "prop-types"

// import Sidebar from "../Sidebar/sidebar"
// import layout from '../Layout/layout.css'
import GlobalStyles from "../../styles/global"



const Layout = ({ children }) => {
  return (
    
    <div className="container-layout">
      <GlobalStyles />
      <Sidebar />
      
      <div className="main-content">{children}</div>
    
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
