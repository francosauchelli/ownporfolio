import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { PortfolioRoutes } from '../portfolio';
import { WelcomeRoutes } from '../welcome';


export const AppRouter = () => {
    return (
        <Routes >
            {/* welcome pages */}
            <Route path='/*' element={ <WelcomeRoutes /> } />

            {/* registry and login */}
            <Route path='/auth/*' element={ <AuthRoutes /> } />

            {/* portfolio pages */}
            <Route path='/portfolio/*' element={ <PortfolioRoutes /> } />
        </Routes>
    );
}