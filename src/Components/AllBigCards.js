import React from 'react'
import BigCard from './BigCard';
import styled from 'styled-components'

const arr1 = ['Unlimited Bandwitch', 'Encrypted Connection','No Traffic Logs', 'Works on All Devices'];
const arr2 = ['Unlimited Bandwitch', 'Encrypted Connection','Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'];
const arr3 = ['Unlimited Bandwitch', 'Encrypted Connection','Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'];
function AllBigCards() {
    const [select, setSelect] = React.useState([true, false, false, false]);

    const setSelectedValue = (val=0) => {
        let t = [false, false, false, false];
        t[val] = true;
        //console.log(t);
        setSelect(t)
    }
   
    return (
       <FlexContainer>
            <div onClick={()=>{setSelectedValue(0)}} >
                <BigCard select={select[0]} title={"Free Plan"} content={arr1} price={"Free"}/>
            </div>
            <div onClick={()=>{setSelectedValue(1)}} >
                <BigCard select={select[1]} title={"Standard Plan"} content={arr2} price={"$9 / mo"}/>
            </div>
            <div onClick={()=>{setSelectedValue(2)}} >
                <BigCard select={select[2]} title={"Premium Plan"} content={arr3} price={"$12 / mo"}/>
            </div>
        </FlexContainer>
    )
}

export default AllBigCards
 
const FlexContainer = styled.div`
    display: flex;
    @media only screen and (max-width : 768px) {
        display: block;
        text-align: center;
        padding: 0rem 4rem;
    }
`;