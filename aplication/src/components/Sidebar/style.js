import styled from 'styled-components';

export const Container = styled.div`
background-color: #F46D1B;
position: absolute;
top: 0px;
left: 0px;
bottom: 0px;
width: 300px;
left: ${props => props.sidebar ? '0' : '-100%'};
animation: showSidebar .4s;
z-index: 2;
> svg {
  position: absolute;
  color: white;
  width: 30px;
  height: 30px;
  margin-top: 32px;
  margin-left: 32px;
  cursor: pointer;
  
}
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
`


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  heigth:100vh
`

export const List = styled.ul`
`
export const Item = styled.li`
color: white;
`

