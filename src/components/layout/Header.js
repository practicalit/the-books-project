import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/search">Search</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/authors">Authors</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/tasks">Tasks</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link disabled" to="/suggestion" tabindex="-1" aria-disabled="true">Suggestions</Link>
  </li>
</ul>
    )
}
