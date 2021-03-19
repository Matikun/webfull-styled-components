import React from 'react';
import Icon1 from '../../images/sv-1.svg';
import Icon2 from '../../images/sv-2.svg';
import Icon3 from '../../images/sv-3.svg';
import {
	ServicesCard,
	ServicesContainer,
	ServicesIcon,
	ServicesP,
	ServicesWrapper,
	ServicesH1,
	ServicesH2,
} from './OurServicesAtoms';

const OurServices = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH2>Reduce Expenses</ServicesH2>
					<ServicesP>
						we Hope reduce your fees and increase your overall revenue
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH2>Virtual Oficces</ServicesH2>
					<ServicesP>You can acces our platform online</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH2>Premiun Benefits</ServicesH2>
					<ServicesP>Unlock our special membership</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default OurServices;
