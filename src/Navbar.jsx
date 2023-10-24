import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-black mb-5">
    <div className="container">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/006/800/199/small/creative-abstract-book-feather-logo-design-vector.jpg" alt="book logo image" className='logo'/>
    <a className="navbar-brand " href="#">BookWorth</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
