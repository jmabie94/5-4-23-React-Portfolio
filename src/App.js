import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
/* might need to include an About page and more components, unsure as of now */
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className='App'>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/projects' element={<AllProjects />}/>
                        <Route path='/contact' element={<Contact />}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;