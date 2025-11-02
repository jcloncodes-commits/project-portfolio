import { Suspense } from "react"
import { useRoutes, } from "react-router-dom"
import HomePage from "../pages/home/HomePage";
import MyWork from "../pages/work/MyWork";


export const AppRoutes = () => {
    const routes = useRoutes([
       {
      path: "/project-portfolio/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/project-portfolio/my-work",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <MyWork />
        </Suspense>
      ),
    },
    ])
    
    return routes;
}
