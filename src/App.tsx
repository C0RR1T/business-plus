import { Route, Routes } from 'react-router-dom';
import StartPage from './routes/start-page/StartPage';
import LoginPage from './routes/login-page/LoginPage';
import Navigation from './routes/navigation/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </>
    );
}

export default App;
