import React from 'react'

const Menu = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Create</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Menu