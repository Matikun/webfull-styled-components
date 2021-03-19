import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from '../components/InfoSection/SectionData';
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<Navbar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<OurServices />
			<InfoSection {...homeObjThree} />
		</>
	);
};

export default Home;
