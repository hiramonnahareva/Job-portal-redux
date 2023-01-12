import React from "react";
import FeaturedJob from "../../sections/FeaturedJob";
import Platform from "../../sections/Platform";
import Landing from "./Landing";

const Home = () => {
  return <div>
    <Landing />
    <Platform/>
    <FeaturedJob/>
  </div>;
};

export default Home;
