import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds page-entry data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="member-list">
      <div className="member-entry">
        <h2>{frontmatter.title}</h2>
        <h3>{frontmatter.intro}</h3>
        <div
          className="member-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const memberQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        intro
      }
    }
  }
`
