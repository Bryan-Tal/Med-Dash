import './App.css'
import DropDownMenu from './components/DropDownMenu'
// import routing and page components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiaryEntriesPage from './pages/DiaryEntriesPage';
import ClinicianCommunicationPage from './pages/ClinicianCommunicationPage';
import HomePage from './pages/HomePage'
import HealthAnalysis from './components/HealthAnalysis'
import HealthHabit from './components/HealthHabit';
import Home from './components/Home';



function App() {
  return (
  
    <div className="app-background">
        <Router>
          <div>
            <DropDownMenu />
            <Routes>
              <Route exact path ="/" element={<Home/>} />
              {/* <Route path="/landing" element={<LandingPage />} /> */}
              <Route path="/healthAnalysis" element={<HealthAnalysis/>} />
              <Route path="/diary" element={<DiaryEntriesPage/>} />
              <Route path="/healthTracker" element={<HealthHabit/>} />
              <Route path="/clinicianComm" element={<ClinicianCommunicationPage/>} />
            </Routes>
          </div>
        </Router>
    </div>
  )
}

export default App;
