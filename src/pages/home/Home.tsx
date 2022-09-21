import { AppRoutes } from 'config/AppRoutes'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback, useRef } from 'react'
import styled, { css } from 'styled-components'
import gsap from 'gsap'

const Home = () => {

  const gsapRef = useRef<HTMLHeadingElement |null>(null);
  const [show, setShow] = useState(false)

  useEffect(() => {

    const timeline = gsap.timeline();


    if(show) {
      timeline.fromTo(
        gsapRef.current,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 1, ease: "power2" }
      );
    }

  },[show])


  return (
    <Wrapper>
      <h1>Home Page</h1>
      <Link to={AppRoutes.about}>About</Link>
      <div>
        <Button primary onClick={() => setShow(prev => !prev)}>Show GSAP</Button>
        
        {show && <h1 ref={gsapRef}>GSAP Heading Element</h1>}

      </div>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.section`
  padding: 4em;
`;

type BtnProps = {
  primary: boolean
}

const Button = styled.button`
    border: 2px solid white;
    background-color: #000;
    color: wheat;
    padding: 0.75rem 2rem;
    margin-top: 2rem;
    font-size: 0.75rem;
    border: none;
    cursor: pointer;
    transform-origin: center;
    transition: all 0.25s ease-in-out;

    &:hover {
        background-color: #1f1f1f;
        color: #fff;
    }

  ${(props: BtnProps) => props.primary && css`
      background: white;
      color: black;
  `}


`