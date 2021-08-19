import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Paragraph = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.red};
`

const IndexPage = () => (
  <>
    <Paragraph>homepage</Paragraph>
    <p>
      <Link to="/subpage">Go to page 2</Link>
    </p>
  </>
)

export default IndexPage
