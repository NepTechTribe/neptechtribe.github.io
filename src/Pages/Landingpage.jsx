import Navbar from "../Components/landingpage/Navbar";
import Hero from "../Components/landingpage/hero";
import AboutUs from "../Components/landingpage/about";
import Programs from "../Components/landingpage/programs";
import Announcement from "../Components/landingpage/announcement";
import PastEvent from "../Components/landingpage/pastevent";
import Partners from "../Components/landingpage/partners";
import Testimonials from "../Components/landingpage/Testimonials";
import Contact from "../Components/landingpage/feedback";
import Footer from "../Components/landingpage/footer";

function LandingPage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Programs/>
        <Announcement/>
        <PastEvent/>
        <Partners/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default LandingPage;