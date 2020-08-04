import styled from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`
export const StyledH1 = styled.h1`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #000000;
  padding: 0.5rem;
  display: inline-block;
  @media (max-width: 840px) {
    font-size: 1.75rem;
    line-height: 1;
    transition: font-size 0.25s;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    transition: font-size 0.25s;
  }
`

export const StyledH4 = styled.h4`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-weight: semibold;
  color: #ffffff;
  background-color: #000000;
  padding: 5px;
  display: inline-block;
  // @media (max-width: 840px) {
  //   font-size: 1.75rem;
  //   line-height: 1;
  //   transition: font-size 0.25s;
  // }
  // @media (max-width: 480px) {
  //   font-size: 1.5rem;
  //   transition: font-size 0.25s;
  // }
`