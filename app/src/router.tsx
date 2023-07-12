import IndexPage from "./pages/indexPage";

import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>
    }
])