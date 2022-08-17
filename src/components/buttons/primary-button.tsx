import styled from 'styled-components'

export const PrimaryButton = styled.button`
    background-color: #000;
    color: wheat;
    padding: 0.75rem 2rem;
    font-size: 0.75rem;
    border: none;
    cursor: pointer;
    transform-origin: center;
    transition: all 0.25s ease-in-out;

    &:hover {
        background-color: #1f1f1f;
        color: #fff;
    }
`
