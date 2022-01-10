import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/search">Search</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/authors">Authors</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/tasks">Tasks</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled" to="/suggestion" tabIndex="-1" aria-disabled="true">Suggestions</Link>
  </li>
</ul>
    )
}
