import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import CoursesSection from './components/CoursesSection'
import ApplicationSection from './components/ApplicationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <HeroSection />

      <div>
        <AboutSection />
      </div>

      <div>
        <CoursesSection />
      </div>

      <div>
        <ApplicationSection />
      </div>

      <div>
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}

export default App
