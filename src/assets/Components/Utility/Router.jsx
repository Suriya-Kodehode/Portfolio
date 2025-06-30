import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "../../../App.jsx";
import Content from "../../Content/HomeContent.jsx";
import SkillContent from "../../Content/SkillContent.jsx";

const styles = {
    text: { width: '100vw', fontSize: '1.5rem', fontWeight: 600, display: 'block', margin: 'auto' }
};


const routes = createHashRouter(
    [
        {
        path: '/',
        element: <App/>,
        errorElement: <p style={styles.text}>Error</p>,
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
            element: <p style={styles.text}>Page not found</p>
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