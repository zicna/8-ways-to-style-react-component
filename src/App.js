import Container from './Container'
import InlineCSS from './diff-ways-to-style/InlineCSS'
import ExternalCSSFile from './diff-ways-to-style/external css file/ExternalCSSFile'
import StyledComponent from './diff-ways-to-style/styled component/StyledComponent'
import CssModule from './diff-ways-to-style/css modules/CssModule'
import CssModuleOne from './diff-ways-to-style/css modules/CssModuleOne'


function App() {
  return (
    <>
      <h1>8 ways to style React Component</h1>
      <Container>
        <InlineCSS />
        <ExternalCSSFile />
        <StyledComponent />
        < CssModule />
        < CssModuleOne/>
      </Container>
    </>
  )
}

export default App
