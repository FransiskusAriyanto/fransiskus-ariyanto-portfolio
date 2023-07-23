import Main from './components/Main';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Switcher from './components/Switcher';
function App() {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <Sidenav />
            <Main />
            <Work />
            <TechStack />
            <Switcher />
        </div>
    );
}

export default App;
