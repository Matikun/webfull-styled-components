import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { menulinks, toggleHome } from '../../helpers/helpers';
import {
	MobileIcon,
	Nav,
	NavMenu,
	NavbarContainer,
	NavItem,
	NavLinks,
	NavLogo,
	NavBtn,
	NavBtnLink,
} from './NavbarAtoms';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const menuLinksRender = (arr, toggle) => {
		return arr.map((str, ind) => (
			<NavItem key={`${str}${ind}`}>
				<NavLinks
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={-80}
					to={str.toLowerCase()}
				>
					{str}
				</NavLinks>
			</NavItem>
		));
	};

	useEffect(() => {
		const changeNav = () => {
			if (window.scrollY >= 80) {
				setScrollNav(true);
			} else {
				setScrollNav(false);
			}
		};
		window.addEventListener('scroll', changeNav);

		return () => {
			window.removeEventListener('scroll', changeNav);
		};
	}, [scrollNav]);

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo onClick={toggleHome} to="/">
						Logo
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>{menuLinksRender(menulinks)}</NavMenu>
					<NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
