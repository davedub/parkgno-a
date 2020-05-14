import React from 'react'

import MemberRoll from '../components/MemberRoll'

export default class PageIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Members</h1>
        <section>
          <div className="content_members">
            <MemberRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}
