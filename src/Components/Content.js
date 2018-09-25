import styled from 'styled-components'

const Content = styled.main`
  padding: 110px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.direction || 'row'};
`

export default Content
