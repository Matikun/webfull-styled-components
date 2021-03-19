import React from 'react';
import { Button } from '../SharedAtoms/Button';
import {
	InfoContainer,
	InfoRow,
	InfoWrapper,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from './InfoAtoms';

const InfoSection = ({
	lightBg,
	imgStart,
	id,
	headLine,
	lightText,
	topLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headLine}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
										to="home"
										primary={primary ? 1 : 0}
										dark={dark ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
