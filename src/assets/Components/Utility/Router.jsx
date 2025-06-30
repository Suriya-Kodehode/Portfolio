import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "../../../App.jsx";
import Content from "../../Content/HomeContent.jsx";
import SkillContent from "../../Content/SkillContent.jsx";
import NotFound from "./notfound.jsx";
import { ThemeProvider } from "../toggleTheme/ThemeContext.jsx";

const ErrorWrapper = () => (
    <ThemeProvider>
        <NotFound />
    </ThemeProvider>
);

const routes = createHashRouter(
    [
        {
        path: '/',
        element: <App/>,
        errorElement: <ErrorWrapper />,
        children: [
                {
                    index: true,
                    element: <Content />,
                },
                {
                    path: "/skills",
                    element: <SkillContent />,
                },
            ]
        }, 
        {
            path: '*',
            element: <ErrorWrapper />
        } 
    ]
);

const AppRouter = () => {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default AppRouter;