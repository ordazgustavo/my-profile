import styled from 'styled-components'

interface IProps {
  direction?: string
}

const Content = styled.main<IProps>`
  padding: 110px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.direction || 'row'};
`

export default Content
