import React from 'react';
import { FaBars } from 'react-icons/fa';
import { menulinks } from '../../helpers/helpers';
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
	const menuLinksRender = (arr, toggle) => {
		return arr.map((str, ind) => (
			<NavItem key={`${str}${ind}`}>
				<NavLinks to={str.toLowerCase()}>{str}</NavLinks>
			</NavItem>
		));
	};
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Logo</NavLogo>
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
