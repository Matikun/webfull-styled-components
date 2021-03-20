import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTitle,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebSiteRights,
} from './FooterAtoms';

const Footer = () => {
	const toggleHome = () => {};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us </FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms of Services</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us </FooterLinkTitle>
							<FooterLink to="/signin">Contact</FooterLink>
							<FooterLink to="/signin">Support</FooterLink>
							<FooterLink to="/signin">Destinations</FooterLink>
							<FooterLink to="/signin">Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos </FooterLinkTitle>
							<FooterLink to="/signin">Submit Video</FooterLink>
							<FooterLink to="/signin">Ambassadors</FooterLink>
							<FooterLink to="/signin">Agency</FooterLink>
							<FooterLink to="/signin">Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media </FooterLinkTitle>
							<FooterLink to="/signin">Instagram</FooterLink>
							<FooterLink to="/signin">FaceBook</FooterLink>
							<FooterLink to="/signin">YouTube</FooterLink>
							<FooterLink to="/signin">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							Logo
						</SocialLogo>
						<WebSiteRights>
							MR. {new Date().getFullYear()} All rights reserved
						</WebSiteRights>
						<SocialIcons>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Facebook"
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="YouTube"
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="Twitter"
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
