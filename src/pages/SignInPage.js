import React from 'react';
import { SignIn } from '../components/SignIn/SignIn';
import { motion } from 'framer-motion';
import ScrollToTop from '../components/SignIn/ScrollToTop';
const SignInPage = () => {
	return (
		<motion.div
			initial={{ scaleY: 0, originX: '50vw', originY: '50vh' }}
			animate={{ scaleY: 1, originX: '50vw', originY: '50vh' }}
			exit={{ scaleY: 0, originX: '50vw', originY: '50vh' }}
			transition={{
				stiffness: 200,
				type: 'linear',
				damping: 80,
				delay: 0.2,
				duration: 0.4,
			}}
		>
			<ScrollToTop />
			<SignIn />
		</motion.div>
	);
};

export default SignInPage;
