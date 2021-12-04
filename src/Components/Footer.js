import React from 'react'
import styled, { css } from 'styled-components'
import Vector from '../Vector.svg';
import FooterList from './FooterList';

const Product = ['Download', 'Pricing', 'Locations', 'Server', 'Contries', 'Blog']
const Engage = ['LaslesVPN ? ', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']
const EarnMoney = ['Affiliate', 'Become Partner']

function Footer() {
    return (
        <Container>
             <FlexContainer>
                <AboutUsContainer>
                <FlexContainer>
                    <Image src={Vector}></Image>
                    <FirstText>LaslesVPN</FirstText>
                </FlexContainer>
                    <AboutUs>LaslesVPN is a private virtual network that has unique features and has high security.</AboutUs>
                    <Licence>
                        ©2020LaslesVPN
                    </Licence>
                </AboutUsContainer>
                <FooterList title={"Product"} content={Product}/>
                <FooterList title={"Engage"} content={Engage}/>
                <FooterList title={"Earn Money"} content={EarnMoney}/>
            </FlexContainer>
        </Container>
    )
}

export default Footer


const Container = styled.div`
width: 100%;
background: #F8F8F8;
padding: 63.5px 0px 0px 100px;
@media only screen and (max-width : 768px) {
    padding: 0px;
    text-align: center;
}
`
const FirstText = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #0B132A;
`;

const AboutUs = styled.h4`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
`;

const AboutUsContainer = styled.h4`
    width: 340px;
    margin-right: 120px;
    @media only screen and (max-width : 768px) {
        width: auto;
        margin-right: 0px;
    }
`;
const Licence = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #AFB5C0;
`;

const Image = styled.img`
    width: 35px;
    margin-right: 10px;
`;

const FlexContainer = styled.div`
    display: flex;
    @media only screen and (max-width : 768px) {
        display: block;
        text-align: center;
    }
`;