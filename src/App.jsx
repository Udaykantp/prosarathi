import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import PropertyListing from './pages/PropertyListing'
import Contact from './pages/Contact'
import PropertyDetails from './pages/PropertyDetails'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Events from './pages/Events'
import UpcomingProjects from './pages/UpcomingProjects'
import RentPropertyListing from './pages/RentPropertyListing'
import RentPropertyDetails from './pages/RentPropertyDetails'
import EventDetails from './pages/EventDetails'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const App = () => {
  return (
    <>
    <Navbar/>
     <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path="/blog/:slug" element={<BlogDetails/>} />
      <Route path="/:category" element={<PropertyListing />}/>
      <Route path="/:category/:slug" element={<PropertyDetails />}/>
      <Route path="/upcoming-projects" element={<UpcomingProjects />}/>
      <Route path="/rent-property/:category" element={<RentPropertyListing/>}/>
      <Route path="/rent-property/:category/:slug" element={<RentPropertyDetails />}/>
      <Route path="/events" element={<Events />} />

<Route path="/events/:slug" element={<EventDetails />} />
<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>
<Route
  path="/terms-and-conditions"
  element={<TermsConditions />}
/>

    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
