import React from 'react';
import { menulinks } from '../../helpers/helpers';
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper,
	SideBtnWrap,
} from './SidebarAtoms';

const Sidebar = ({ isOpen, toggle }) => {
	const sidebarLinksRender = (arr, toggle) => {
		return arr.map((str) => (
			<SidebarLink key={str} to={str.toLowerCase()} onClick={toggle}>
				{str}
			</SidebarLink>
		));
	};

	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>{sidebarLinksRender(menulinks, toggle)}</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
