import React from 'react'
import { Link } from 'gatsby'
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
        <p><Link to="/">Back to home</Link></p>
      </React.Fragment>
    )
  }
}
