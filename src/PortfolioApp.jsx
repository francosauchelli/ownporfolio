import { AppRouter } from './router/AppRouter'
import { AppTheme } from './themes/AppTheme';

import 'animate.css';

export const PortfolioApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
}