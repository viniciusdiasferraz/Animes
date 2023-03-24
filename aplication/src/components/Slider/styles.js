import styled from 'styled-components'

export const Body = styled.div`
width:100%;
`


export const Line = styled.div`
width:100%;
background-color:#34AC40;
height: 2.5vh;
`


export const Content = styled.div`
  max-width: 1940px;
  height: 80vh;
  margin: 0 auto;
  &::after{
  color: #F46D1B;
  margin-right: 20px;
  height: 13em;
  margin: 2em;
}
`

export const Container = styled.div`
  max-width: 1940px;
  width: 50vw;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  margin: -5px auto 40px;
  display: flex;
`

export const Singleimg = styled.img`
 width: 90%;
  height: 30vh;
  margin-bottom: -3px;
  margin-left: 6em;
  cursor: pointer;
  object-fit: cover;
`


