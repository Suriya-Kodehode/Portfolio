import { createBrowserRouter } from "react-router-dom";
import { base_url as base } from "../../../config"

import App from "../../App.jsx";
import Content from "../Content/HomeContent.jsx";
import SkillContent from "../Content/SkillContent.jsx";


const routes = createBrowserRouter(
    [
        {
        path: '/',
        element: <App/>,
        errorElement: <p>Error</p>,
        children: [
                {
                    index: true,
                    element: <Content />
                },
                {
                    path: '/skills',
                    element: <SkillContent />
                }
            ]
        }, 
        {
            path: '*',
            element: <p>Page not found</p>
        } 
    ],
    {
        basename: base,
    }
)

export default routes