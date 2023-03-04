import {
    Outlet
} from 'react-router-dom';
import Navbar from "../Navbar"
import Footer from "../Footer"

// App Container can be seen as a wrapper component - it will sit around all other pages in our application. If we wanted a navbar, this would be agood place to render it since all views would have equal access to that markup.
export default function AppContainer() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}