import React from 'react'
import styled, { css } from 'styled-components'
import image1 from '../image1.svg';
import star from '../star.svg';


function SmallCard({name, content, address, selected, rating}) {
    return (
        <Container  select={selected} >
            <FlexContainer>
                <Image src={image1}></Image>
                <div>
                    <Name>{name}</Name>
                    <Address>{address}</Address>
                </div>
                <Rating>{rating} <img src={star}></img></Rating>
            </FlexContainer>
            <Content>
                {content}
            </Content>
        </Container>
    )
}

export default SmallCard

const FlexContainer = styled.div`
    display: flex;
`;
const Container = styled.div`
    max-width: 400px;
    height: 230px;
    background: #FFFFFF;
    border: 2px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    ${props => props.select && css`
    border: 2px solid #F53838;
  `}
`
const Image = styled.img`
    width: 50px;
    margin-right: 20px;
`;

const Name = styled.h4`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color: #0B132A;
margin: 0px;
`;

const Address = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 30px;
color: #4F5665;
margin-top: 5px;
`;
const List = styled.ul`
    text-align: center;
`;
const Content = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    align-items: center;
    color: #0B132A;
    margin-top: 0px;
`;
const Rating = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 30px;
color: #0B132A;
margin-left: auto;
margin-right: 12px;
display: flex;
align-items: center;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 50px;
  border: 2px solid #F53838;
  color: #F53838;
  padding: 0.813rem 3.938em;

  ${props => props.primary && css`
    background: #F53838;
    color: white;
  `}
`;