import FloatingBtn from "./floatingbtn/FloatingBtn";
import Header from "./header/header";
import HeroSection from "./heroSection/HeroSection";
import HeroSubSection from "./heroSection/HeroSubSection";
import Poster from "./heroSection/Poster";
import Poster2 from "./heroSection/Poster2";

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