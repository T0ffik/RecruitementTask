import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { NotFound } from "../../pages/NotFound";
import { idRoute, pageRoute } from "../../utils/consts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: `${idRoute}:id`,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: `${pageRoute}:page`,
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
