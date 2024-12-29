
import Navbar from '../Page/Share/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Share/Footer';

const HomeLayout = () => {
    return (
        <div> 
        <header  className='w-11/12 mx-auto max-w-7xl'>
            <Navbar></Navbar>
        </header>
        <main className='flex w-11/12 mx-auto max-w-8xl justify-center flex-wrap gap-10'>
            <Outlet></Outlet>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
};

export default HomeLayout;