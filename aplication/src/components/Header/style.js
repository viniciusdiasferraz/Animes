import styled from "styled-components";

export const Container = styled.div`
height: 5rem;
background-color: black;
display: flex;
justify-content: space-between;
padding: 0.5em;
box-shadow: 0 0 20px 3px;
> svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`

export const Icon = styled.img`
width: 8em;
border-radius: 10em;
margin-left:5em
`

export const Containerbuttons = styled.div`
    display: flex;
    align-items: center;
    width: 30em;
    justify-content: space-evenly;
`

export const Button = styled.button`
    width: 8.5em;
    height: 3em;
    background-color: transparent;
    border-radius: 1em;
    color: white;
    cursor: pointer;
    &:hover {
        background: red;
    }

`
export const Imput = styled.input`
    height: 3em;
    border-radius: 0.6em;
    outline: none;
    border: none;
    margin: auto 0;
    &:hover {
        background: red;
        ::placeholder{
            color: white;
        }
    }
    &::placeholder{
        color: black;
    }`





