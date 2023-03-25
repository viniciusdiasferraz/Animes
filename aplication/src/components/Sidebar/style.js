import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F46D1B;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  width: 15em;
  animation: showSidebar .4s;
  z-index: 20; 
  height: 100%;
  
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 5em;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
  `
export const Text = styled.text`
  color: white;
  display: flex;
  justify-content: flex-end;
  font-size: 2em;
  margin: 0 15px 0 0;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  heigth:100vh;
  margin-left: 1em;
`
export const TextTitle = styled.text`
  color: white;
  text-transform: uppercase;
  margin-bottom: 1em;
  font-size: 1.2em;
  display: flex;
  justify-content: space-evenly;
  width: 75%;
  font-weight: 600;
}
`



export const List = styled.ul`
  list-style: none;
  margin-left: 1em;
`
export const Item = styled.li`
  color: white;
  margin-bottom: 0.5em;
`

