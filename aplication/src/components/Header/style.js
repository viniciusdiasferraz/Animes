import styled from "styled-components";


export const Logo = styled.img`
  margin-left: 7%;
  margin-top: 1%;
  cursor: pointer;
`

export const Container = styled.div`
  background-image:  url("./banner.png") ;
  background-size: auto;
  height: 73vh;
  padding: 0.5em;
  margin-bottom: 4%;
  > svg {
      position: absolute;
      color: white;
      width: 30px;
      height: 30px;
      margin-top: 32px;
      margin-left: 32px;
      cursor: pointer;
    }

    @media(max-width: 550px){
      display: flex;
      flex-direction: column;
      aling-itens: center;
      justify-content: center;
      aling-content: space-between;
    }
`

export const Containerimput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2.5%;
  
  @media(max-width: 550px){
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
 `
 export const Containersearch = styled.div`
  position: relative;
 ` 

 export const Imput = styled.input`
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
`


export const Textcontainer = styled.div`
    color: white;
    font-size: 4em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 98%;
    height: 28vh;
    justify-content: flex-end;

    @media(max-width:800px){
      font-size: 2.5em;
    }

    @media(max-width:600px){
      font-size: 2em;
    }

    @media(max-width:550px){
      height: 18vh;
    }

    @media(max-width:400px){
      font-size: 1.5em;
    }
`

export const paragraphone = styled.div`
  span{
      color: #F46D1B;
  }
`

export const paragraphtwo = styled.div`
  span{
      color: #34AC40;
  }
  `