import { createBrowserRouter } from "react-router-dom";

import styles from './Router.module.css'

import App from "../../../App.jsx";
import Content from "../../Content/HomeContent.jsx";
import SkillContent from "../../Content/SkillContent.jsx";


const routes = createBrowserRouter(
    [
        {
        path: '/',
        element: <App/>,
        errorElement: <p className={styles.text}>Error</p>,
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
        }, {
            path: '*',
            element: <p className={styles.text}>Page not found</p>
            } 
    ],{
        basename: '/Portfolio-forsettelse-oppgave',
    });

export default routes