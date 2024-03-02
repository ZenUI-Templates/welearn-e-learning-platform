import React from "react";

// all components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Company from "./Components/Company";
import CourseOutlet from "./Components/CourseOutlet";
import Status from "./Components/Status";
import Instructor from "./Components/Instructor";
import CourseCategory from "./Components/CourseCategory";
import JoinCommunity from "./Components/JoinCommunity";
import UpcomingWorkshop from "./Components/UpcomingWorkshop";
import Review from "./Components/Review";
import Support from "./Components/Support";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <CourseOutlet />
      <Status />
      <Instructor />
      <CourseCategory />
      <JoinCommunity />
      <UpcomingWorkshop />
      <Review />
      <Support />
      <Footer />
    </>
  );
};

export default App;
