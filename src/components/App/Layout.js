import React from "react"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
    return (
        <>
            {children}
            <GoTop />
        </>
    )
}
export default Layout
