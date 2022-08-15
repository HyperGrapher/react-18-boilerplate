import { AppRoutes } from 'config/AppRoutes'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <Link to={AppRoutes.about}>About</Link>
      <div>
        <Button primary onClick={() => alert('Hello')}>Say Hello</Button>
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