import React from "react";
import Recruiting from "../../components/reusable/Recruiting";
import FeaturedJob from "../../sections/FeaturedJob";
import Platform from "../../sections/Platform";
import Landing from "./Landing";

const Home = () => {
  return <div>
    <Landing />
    <Platform/>
    <FeaturedJob/>
    <Recruiting/>
  </div>;
};

export default Home;
