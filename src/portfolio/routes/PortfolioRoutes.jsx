import { Route, Routes, Navigate } from 'react-router-dom';
import { 
    AboutMePage, 
    EducationPage, 
    PortfolioPage, 
    ProjectsPage, 
    SocialLinksPage, 
    WorkExperiencePage 
} from '../pages';


export const PortfolioRoutes = () => {
    return (
        <Routes>
            <Route path='/aboutme' element={ <AboutMePage /> } />
            <Route path='/education' element={ <EducationPage /> } />
            <Route path='/experience' element={ <WorkExperiencePage /> } />
            <Route path='/projects' element={ <ProjectsPage /> } />
            <Route path='/social' element={ < SocialLinksPage /> } />
            <Route path='/' element={ <PortfolioPage /> } />

            <Route path='/*' element={ <Navigate to='/portfolio' /> } />
        </Routes>
    );
}