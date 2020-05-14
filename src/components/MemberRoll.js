import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class MemberRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: pages } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {pages &&
          pages.map(({ node: page }) => (
            <div className="is-parent column is-6" key={page.id}>
              <article
                className={`page-list-item tile is-child box notification ${
                  page.frontmatter.featuredpage ? 'is-featured' : ''
                }`}
              >
                <header>
                  <p className="page-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={page.frontmatter.path}
                    >
                      {page.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {page.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {page.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={page.frontmatter.path}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

MemberRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query MemberRollQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: {regex : "\/members/"} },
          sort: { order: DESC, fields: [frontmatter___title] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => <MemberRoll data={data} />}
  />
)
