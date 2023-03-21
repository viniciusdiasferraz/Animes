import styled from "styled-components";


export const Logo = styled.img`
width: 8em;
`

export const Container = styled.div`
    width:100%;
    background-color: ${props => props.background ?? 'rgba(0, 0, 0, 0.9)'};
    height: 19vh;
    z-index: 1;
    position: ${props => props.position ?? 'unset'};
`

export const Containerimput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
 `

export const Textcontainer = styled.div`
    color: white;
    font-size: 4em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 3em;
    justify-content: flex-end;
`
