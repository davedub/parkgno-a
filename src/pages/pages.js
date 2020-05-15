import React from 'react'
import { Link } from 'gatsby'
import PageRoll from '../components/PageRoll'

export default class PageIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Pages</h1>
        <section>
          <div className="content_pages">
            <PageRoll />
          </div>
        </section>
        <p><Link to="/">Back to home</Link></p>
      </React.Fragment>
    )
  }
}
