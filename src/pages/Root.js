import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout(){

    return (
        <>
          
          <main>
          <MainNavigation/>
          <Outlet/>
          </main>
            
        </>
    )
}
export default RootLayout;
//outlet component marks the place where the child route will be rendered