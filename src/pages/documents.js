import React from 'react'
import { Link } from 'gatsby'
import DocumentRoll from '../components/DocumentRoll'

export default class PageIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Documents</h1>
        <section>
          <div className="content_documents">
            <DocumentRoll />
          </div>
        </section>
        <p><Link to="/">Back to home</Link></p>
      </React.Fragment>
    )
  }
}
