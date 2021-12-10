import React from 'react'
import styled from 'styled-components'
import Vector from '../Vector.svg';
import Illustration from '../Illustration.svg';
export default function Header() {
    return (
        <div>
            <FlexContainer1>
                <Image src={Vector}></Image>
                <FirstText>Lasles<FirstTextSpan>VPN</FirstTextSpan></FirstText>

                <SecondText>pricing</SecondText>
                <SecondText>testimonials</SecondText>
                <SignText>Sign In</SignText>
                <Button>sign up</Button>
            </FlexContainer1>
            <FlexContainer>
            <HeaderDetail>
            <MainHeader>Want anything to be easy with LaslesVPN.</MainHeader>
            <SecondaryHeader>Provide a network for all your needs with ease and fun using <FirstTextSpan>LaslesVPN</FirstTextSpan> discover interesting features from us.</SecondaryHeader>
            <GetButton>Get Started</GetButton>
            </HeaderDetail>
            <MainImage src={Illustration}></MainImage>
            </FlexContainer>

        </div>
    )
}

const HeaderDetail = styled.div`
    margin-bottom: 20px;
`;

const MainHeader = styled.h1`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 70px;
    color: #0B132A;
    margin-top: 0px;
`;
const SecondaryHeader = styled.h4`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
`;
const FirstText = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #0B132A;
    padding-right: 50%;
    @media only screen and (max-width : 768px) {
        margin-right: 0px;
        padding-right: 0%;
    }
    @media only screen and (max-width : 992px) {
        margin-right: 0px;
        padding-right: 0%;
    }
`;
const FirstTextSpan = styled.span`
    font-weight: 700;
`;
const SecondText = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #4F5665;
    margin-right: 40px;
`;
const SignText = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #0B132A;
    margin-right: 1.875rem;
`;
const Button = styled.button`
    background: transparent;
    border-radius: 50px;
    border: 1px solid #F53855;
    color: #F53855;
    padding: 0.8125rem 2.8125rem;
`;
const Image = styled.img`
    width: 35px;
    margin-right: 10px;
`;
const MainImage = styled.img`
    max-width: 611.24px;
`;
const FlexContainer1 = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 80px;
    @media only screen and (max-width : 768px) {
        display: block;
    }
    @media only screen and (max-width : 992px) {
        display: block;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    @media only screen and (max-width : 768px) {
        display: block;
    }
    @media only screen and (max-width : 992px) {
        display: block;
    }
`;

const GetButton = styled.button`
  background: #F53838;
  border-radius: 10px;
  color: #FFFFFF;
  padding: 1.094rem 4.719em;
  border: 2px solid #F53838;
`;
