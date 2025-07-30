import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import StatsPage from './pages/StatsPage';
import RewardsPage from './pages/RewardsPage';
import BlogPage from './pages/BlogPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PartnersPage from './pages/PartnersPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/stats" element={<StatsPage />} />
                <Route path="/rewards" element={<RewardsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                {/* ...daha çox page əlavə et... */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
