import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`
export const Image = styled.img`
  width: 150px;
  height: 150px
  margin-right: 1rem;
  border-radius: 50%;
  padding-bottom: 1em;
`;

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  // display: inline-block;
  font-size: 28px;
`

export const EmailLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #0062ff;
    text-decoration: underline;
  }
`