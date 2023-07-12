import { createBrowserRouter } from "react-router-dom";

import IndexPage from "./pages/indexPage";
import AppOutlet from "./layout/AppOutlet";
import VkPage from "./pages/application/vkPage";
import OkPage from "./pages/application/okPage";

export const Router = createBrowserRouter([
    {
        path : '/',
        index : true,
        element : <IndexPage/>
    },
    {
        path : '/app',
        element : <AppOutlet/>,
        children : [
            {
                path : 'ok',
                element : <OkPage/>
            },
            {
                path : 'vk',
                element : <VkPage/>
            }
        ]
    }
])