import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
// http://example.com/products => example.com is the domain and /products is the path
const router1 = createBrowserRouter([
  {
    //here rootlayout is the parent layout and the 2 children route are present 
    //here rootlayout act as a wrapper for these two children
    index:true,
    element: <RootLayout />,
    errorElement:<ErrorPage/> ,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage />},
      {path:'products/:productId', element: <ProductDetailPage/>}
    ],
  },
]);

// => index:true also a method for default page 
function App() {
  return <RouterProvider router={router1} />;
}

export default App;

//you can control the path what you want to set and it will work accordingly
//so the router 1 is used as prop in router={router1} this is how it works
//this is how we activate route
