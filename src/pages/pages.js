import React from 'react'

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
      </React.Fragment>
    )
  }
}
