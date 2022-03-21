import React from "react"

import Footer from "./footer"
import Header from "./header"

const Layout: React.FC = ({children}): React.ReactElement => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout

{/* <NavItem
          href={`${ROUTES.JOBS}`}
        >
          Jobs
        </NavItem> */}
