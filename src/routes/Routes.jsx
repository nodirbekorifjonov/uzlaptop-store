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
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Routes;
