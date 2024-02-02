// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// layouts
import RootLayout from "../layouts/RootLayout";
import ShopLayout from "../layouts/ShopLayout";

// pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ShopDetails from "../pages/Shop/ShopDetails";
import AuthLayout from "../layouts/AuthLayout";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/shop" element={<ShopLayout />}>
          <Route index element={<Shop />} />
          <Route path=":id" element={<ShopDetails />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LogIn />} />
          <Route path=":signup" element={<SignUp />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Routes;
