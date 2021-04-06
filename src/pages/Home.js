import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
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
		<motion.div
			initial={{ scale: 0, originX: '50vw', originY: '50vh' }}
			animate={{ scale: 1, originX: '50vw', originY: '50vh' }}
			exit={{ scale: 0, originX: '50vw', originY: '50vh' }}
			transition={{
				stiffness: 200,
				type: 'linear',
				damping: 80,
				delay: 0.2,
				duration: 0.4,
			}}
		>
			<Navbar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjOne} />
			<InfoSection {...homeObjTwo} />
			<OurServices />
			<InfoSection {...homeObjThree} />
			<Footer />
		</motion.div>
	);
};

export default Home;
