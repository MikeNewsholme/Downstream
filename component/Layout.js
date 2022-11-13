import Footer from "./Footer"
import Navbar from "./NavBar"
import Background from "./Background"

const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout

//created a Layout function
//deployed page components {children} as a prop
