import styled from "styled-components";

export const Logo = styled.img`
  width: 8em;
  margin-left: 7%;
  cursor: pointer;
`

export const Container = styled.div`
  width:100%;
  background-color: ${props => props.background ?? 'rgba(0, 0, 0, 0.9)'};
  height: 17vh;
  z-index: 1;
  position: ${props => props.position ?? 'unset'};
`

export const Containerimput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media(max-width: 440px) {
      width: 85%;
    }
 `
export const Containersearch = styled.div`
  position: relative;
 `

export const Input = styled.input`
  height: 2.4em;
  font-size: 14px;
  padding: 12px 12px 12px 15px;
  border: 2px solid #FFFFFF;
  outline:none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  background-color: transparent;
  color: white;
  &:hover {
    ::placeholder {
      color: white;
    }
  }
  &::placeholder {
    color: white;
    font-weight: 300;
  }

  @media(max-width: 440px) {
    width: 100%;
  }
`

