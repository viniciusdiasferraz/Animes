import styled from 'styled-components'

export const Body = styled.div`
  width:100%;
  max-width: 1310px;
  margin: 2rem auto;
  margin-bottom: 6rem;

  @media(max-width: 800px){
    display:none;
  }

  .slick-dots li button:before {
    color: #F46D1B;
    font-size: 15px;
  }
`

export const Singleimg = styled.img`
 width: 90%;
  height: 30vh;
  margin-bottom: -3px;
  margin-left: 5em;
  cursor: pointer;
  object-fit: cover;
  border-top: 12px solid #34AC40;
`

export const Text = styled.text`
background: rgba(0, 0, 0, 0.8);
color: white;
 span{
  text-transform: uppercase;
  color: #F46D1B;
 }
`