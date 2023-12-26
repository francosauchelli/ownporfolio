import { configureStore } from '@reduxjs/toolkit';
import { portfolioSlice } from './portfolio/portfolioSlice';

export const store = configureStore({
    reducer: {
        portfolio: portfolioSlice.reducer,
    }
});