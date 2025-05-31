import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCustomer } from "./screen/RegisterCustomer";
import { RegisterBarber } from "./screen/RegisterBarber";
import { PageNotFound } from "./components/PageNotFound";
import { LoginCustomer } from "./screen/LoginCustomer";
import { LoginBarber } from "./screen/LoginBarber";
import { HomePage } from "./screen/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register-barber",
    element: <RegisterBarber />,
  },
  {
    path: "/register-customer",
    element: <RegisterCustomer />,
  },
  {
    path: "/login-barber",
    element: <LoginBarber />,
  },
  {
    path: "/login-customer",
    element: <LoginCustomer />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
