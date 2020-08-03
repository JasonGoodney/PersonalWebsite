
import styled from 'styled-components'
import { white } from '@carbon/colors'

export const ProjectLinkTitle = styled.a`
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0;
  font-weight: bold;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #0062ff;
    text-decoration: underline;
  }
`

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
  
`


export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`