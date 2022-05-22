import styled from "styled-components";
import DetailsSection from "./DetailsSection";
import MainHeader from "./MainHeader";
import MainMetrics from "./MainMetrics";


const MainStyles = styled.main`
margin-top: 2rem;
`;

const Main = () => {

    return (
        <MainStyles>
            <MainHeader/>
            <MainMetrics/>
            <DetailsSection/>
        </MainStyles>
    )
}

export default Main;