import React from 'react'
import styled, { css } from 'styled-components'

function FooterList({title, content}) {
    return (
        <List>
            <ListHead>{title}</ListHead>
            {content.map((value)=>{
                return(
                        <Content key={value}>
                            {value}
                        </Content>
                )
            })}
        </List>
    )
}

export default FooterList

const List = styled.ul`
    text-align: center;
    margin-right: 126px;
    padding: 0px;
    @media only screen and (max-width : 768px) {
        margin-right: 0px;
    }
`;
const FlexContainer = styled.div`
    display: flex;
`;

const Content = styled.p`
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
`;

const ListHead = styled.h4`
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #0B132A
    margin-top: 0px;
`;