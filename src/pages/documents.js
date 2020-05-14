import React from 'react'

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
      </React.Fragment>
    )
  }
}
