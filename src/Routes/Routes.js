import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Welcome from "../Pages/Welcome/Welcome";

const router = createBrowserRouter([
    {
        path: '/main',
        element: <Main></Main>,
        children:[
            {
                path: '/main',
                element: <Welcome></Welcome>
            }
        ]
    },
    {
        path: '/',
        element: <Welcome></Welcome>
    }
])

export default router;