import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';




export default function ButtonAppBar() {
    

    return (
      <div className>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Spotify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="#navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <NavLink to="/artists">
                    Artist <span className="sr-only">(current)</span>
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/albums">Albums</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <NavLink to="/genres">Genres</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
