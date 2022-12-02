import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Welcome from "../Pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Welcome></Welcome>
            }
        ]
    }
])

export default router;