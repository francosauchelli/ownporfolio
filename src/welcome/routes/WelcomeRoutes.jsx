import { Navigate, Route, Routes } from 'react-router-dom';
import { WelcomePage } from '../pages/WelcomePage';


export const WelcomeRoutes = () => {
    return (
        <Routes >
            <Route path='/' element={ <WelcomePage /> }/>
            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    );
};