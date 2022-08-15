import { AppRoutes } from "config/AppRoutes";
import { Link } from "react-router-dom";
import styled from "styled-components";

const About = () => {

    return (
        <Wrapper>
            <h1>About</h1>
            <Link to={AppRoutes.home}>Home</Link>
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.section`
  padding: 4em;
`;
