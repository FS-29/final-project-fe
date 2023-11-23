import FloatingBtn from "../component/floatingbtn/FloatingBtn";
import Header from "../component/header/header";
import HeroSection from "../component/heroSection/HeroSection";
import HeroSubSection from "../component/heroSection/HeroSubSection";
import Poster from "../component/heroSection/Poster";
import Poster2 from "../component/heroSection/Poster2";

function HomePage() {
    return (
      <>
        <Header></Header>
        <FloatingBtn></FloatingBtn>
        <HeroSection></HeroSection>
        <Poster></Poster>
        <HeroSubSection></HeroSubSection>
        <Poster2></Poster2>
      </>
    );
  }
  
  export default HomePage;