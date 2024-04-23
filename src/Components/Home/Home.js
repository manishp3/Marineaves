import React from "react";
import Services from "./Services";
import Partners from "./Partners";
import VideoBackground from "./VideoBackground";
import SearchBar from "./SearchBar";
import Expert from "./Expert";
import CallRequest from "./CallRequest";
import Preloader from "../Utility/Preloader";
import { animated, useSpring } from "react-spring";

function Home() {
  React.useEffect(() => {
    document.title = "MarineWaves | Home";
  }, []);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <>
      <Preloader />

      {/* VIDEOBACKGROUND SECTION */}
      <animated.div style={fadeIn}>
        <VideoBackground />
      </animated.div>

      {/* PARTNER SECTION */}
      <animated.div style={fadeIn}>
        <Partners />
      </animated.div>

      {/* SEARCH SECTION */}
      <animated.div style={fadeIn}>
        <SearchBar />
      </animated.div>

      {/* EXPERT SECTION */}
      <animated.div style={fadeIn}>
        <Expert />
      </animated.div>

      {/* SERVICES SECTION */}
      <animated.div style={fadeIn}>
        <Services />
      </animated.div>

      {/* CALL REQUEST SECTION */}
      <animated.div style={fadeIn}>
        <CallRequest />
      </animated.div>
    </>
  );
}

export default Home;
