import './App.css';
import Header from './Components/Header';
import styled from 'styled-components'
import UpperContent from './Components/UpperContent';
import BigCard from './Components/BigCard';
import SmallCard from './Components/SmallCard';
import Footer from './Components/Footer';
import AllSmallCards from './Components/AllSmallCards';
import AllBigCards from './Components/AllBigCards';


function App() {
  return (
    <MainContainer>
      <Container>
        <Header/>
        <UpperContent title={'Choose Your Plan'} secondtitle={'Let\'s choose the package that is best for you and explore it happily and cheerfully.'}/>
        <AllBigCards/>
        <UpperContent title={'Trusted by Thousands of Happy Customer'} secondtitle={'These are the stories of our customers who have joined us with great pleasure when using this crazy feature.'}/>
       <AllSmallCards/>
      </Container>
      <Footer/>
    </MainContainer>
  );
}

export default App;


const MainContainer = styled.div`
overflow: hidden;
`
const Container = styled.div`
  padding: 3.125rem 5.25rem 6.25rem 9.375rem;
  @media only screen and (max-width : 768px) {
    text-align: center;
    padding: 0rem;
    margin-left: auto;
    margin-right: auto;
}
`

const FlexContainer = styled.div`
    display: flex;
    @media only screen and (max-width : 768px) {
        display: block;
        text-align: center;
    }
`;