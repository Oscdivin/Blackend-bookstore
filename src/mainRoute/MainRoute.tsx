import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingScreen from "../pages/LandingPages/LandingScreen"

export const MainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children: [
            {
                index:true,
                element: <LandingScreen/>
            }
        ]
    }
])