import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { colors } from '../styles/colors';

export const Container = styled.div`
	min-height: 692px;
	height: 100%;
	position: fixed;
	bottom: 0;
	top: 0;
	right: 0;
	left: 0;
	z-index: 0;

	background: linear-gradient(
		180deg,
		rgb(10, 155, 245) 0%,
		rgb(0, 176, 255) 100%
	);
`;

export const FormWrap = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	} ;
`;

export const Icon = styled(LinkR)`
	margin-left: 32px;
	margin-top: 32px;
	text-decoration: none;
	color: ${colors.letterWhite};
	font-weight: 700;
	font-size: 32px;

	@media screen and (max-width: 480px) {
		margin-left: 16px;
		margin-top: 8px;
	}
`;

export const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

export const Form = styled.form`
	display: grid;
	background: #010101;
	max-width: 400px;
	height: auto;
	width: 100%;
	z-index: 1;
	margin: 0 auto;
	padding: 80px 32px;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 480px) {
		padding: 32px 32px;
	}
`;

export const FormH1 = styled.h1`
	margin-bottom: 40px;
	color: ${colors.letterWhite};
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;

export const FormLabel = styled.label`
	margin-bottom: 8px;
	font-size: 14px;
	color: #fff;
`;

export const FormInput = styled.input`
	padding: 16px 16px;
	margin-bottom: 32px;
	border: none;
	border-radius: 4px;
`;
export const FormButton = styled.button`
	background: ${colors.primaryGreen};
	padding: 16px 0;
	border: none;
	border-radius: 4px;
	color: ${colors.letterWhite};
	font-size: 20px;
	cursor: pointer;
`;

export const Text = styled.span`
	text-align: center;
	margin-top: 24px;
	color: ${colors.letterWhite};
	font-size: 14px;
`;
