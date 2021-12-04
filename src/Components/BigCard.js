import React from 'react'
import styled, { css } from 'styled-components'
import Free from '../Free.svg';
import tick from '../tick.svg';


function BigCard({title, content, price, select}) {
    return (
        <Container select={select}>
            <Image src={Free}></Image>
            <Title>{title}</Title>
            <List>
            {content.map((value)=>{
                return(
                    <FlexContainer key={value}>
                        <img src={tick}></img>
                        <Content key={value}>
                            {value}
                        </Content>
                    </FlexContainer>
                )
            })}
            </List>
        <Price>{price}</Price>
        <Button primary={select}>Select</Button>
        </Container>
    )
}

export default BigCard

const FlexContainer = styled.div`
    display: flex;
`;
const Container = styled.div`
    width: 20.625rem;
    height: 47.5rem;
    background: #FFFFFF;
    border: 2px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
    text-align: center;
    @media only screen and (max-width : 768px) {
        margin-right: 0px;
        margin-bottom: 20px;
    }
    ${props => props.select && css`
    border: 2px solid #F53838;
   
  `}
`
const Image = styled.img`
    width: 144.92px;
    margin-top: 5rem;
`;

const Title = styled.h1`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #0B132A;
`;

const List = styled.ul`
    text-align: center;
`;
const Content = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #0B132A;
    margin-left: 1.625rem;
    margin-top: 0rem;
`;
const Price = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 30px;
text-align: center;
color: #0B132A;
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