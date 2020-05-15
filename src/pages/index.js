import React from "react"
import { Link } from 'gatsby'

export default () => {
    return (
      <>
        <h2>Hello Parkngo!</h2>
        <h4>We are glad you are here.</h4>
        <p><Link to="/pages">Pages</Link></p>
        <p><Link to="/documents">Documents</Link></p>
        <p><Link to="/members">Members</Link></p>
        <p><Link to="/account">Account</Link></p>
        <p><Link to="/">Back to home</Link></p>

      </>)
  }
