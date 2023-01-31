import React from "react";
import ImportantPlan from "./ImportantPlane";
import Footer from "./Footer";
import Stake from "./Stake";

import Navbar from "./Navbar";
import Cards from "./Cards";
import Hero from "./Hero";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Cards />
			<ImportantPlan />
			<Stake />
			<Footer />
		</>
	);
};

export default Home;
