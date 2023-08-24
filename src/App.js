import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Product';


// http://example.com/products => example.com is the domain and /products is the path 
const router1 = createBrowserRouter([
  {path:'/' ,element: <HomePage/>},
  {path: '/products', element:<ProductsPage/>}
]);

function App() {

  return <RouterProvider router={router1}/>;
}

export default App;

//you can control the path what you want to set and it will work accordingly 
//so the router 1 is used as prop in router={router1} this is how it works
//this is how we activate route