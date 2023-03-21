import styled from 'styled-components'

export const Content = styled.div`
  max-width: 1940px;
  height: 80vh;
  margin: 0 auto;
  &::after{
  color: #282c34;
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
 width: 100%;
  height: 100vh;
  margin-bottom: -3px;
  cursor: pointer;
  object-fit: cover;
`


