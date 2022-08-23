import styled from 'styled-components'

const Title = styled.h1`
  color: blue;
  border: 1px solid red;
  &:hover{
    color: green;
  }
`

const StyledComponent = () => {
  return <Title> Hello from Styled Component</Title>
}

export default StyledComponent
