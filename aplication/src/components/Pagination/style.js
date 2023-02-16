import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 1rem;
`

export const Button = styled.button`
margin-right: 1em;
border-radius: 10px;
width: 2.5em;
cursor: pointer;
background-color: #A6955A;
border: none;
&:hover {
    background: red;
}
`