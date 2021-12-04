import React from 'react'
import styled from 'styled-components'
function UpperContent({title, secondtitle}) {
    return (
        <Container>
            <MainHeader>{title}</MainHeader>
            <SecondaryHeader>{secondtitle}</SecondaryHeader>
        </Container>
    )
}

export default UpperContent


const Container = styled.div`
`
const MainHeader = styled.h1`
    max-width: 440px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #0B132A;
`;
const SecondaryHeader = styled.h4`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #4F5665;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
`;