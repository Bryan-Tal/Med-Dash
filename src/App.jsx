import './App.css'
import DropDownMenu from './components/DropDownMenu'
// import routing and page components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiaryEntriesPage from './pages/DiaryEntriesPage';
import ClinicianCommunicationPage from './pages/ClinicianCommunicationPage';
import HomePage from './pages/HomePage'
import HealthAnalysis from './components/HealthAnalysis'
import HealthHabit from './components/HealthHabit';




function App() {
  return (
    <div className="mt-20 py-4 px-8">
      <section className="flex justify-between items-center">
        <Router>
          <div>
            <DropDownMenu />
            <Routes>
              <Route exact path ="/" element={<HomePage/>} />
              {/* <Route path="/landing" element={<LandingPage />} /> */}
              <Route path="/healthAnalysis" element={<HealthAnalysis/>} />
              <Route path="/diary" element={<DiaryEntriesPage/>} />
              <Route path="/healthTracker" element={<HealthHabit/>} />
              <Route path="/clinicianComm" element={<ClinicianCommunicationPage/>} />
            </Routes>
          </div>
        </Router>

      </section>
    </div>
  )
}

export default App;
