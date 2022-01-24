import { Route, Routes } from 'react-router-dom';
import StartPage from './routes/start-page/StartPage';
import LoginPage from './routes/login-page/LoginPage';
import Navigation from './routes/navigation/Navigation';
import Meeting from './routes/meetings/Meeting';
import Flight from './routes/flights/Flight';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/flights' element={<Flight />} />
                <Route path='/meetings' element={<Meeting />} />
            </Routes>
        </>
    );
}

export default App;
