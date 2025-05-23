import React from 'react';
import { Link } from 'gatsby';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import './Navbar.scss';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">

          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <Link className="navbar-item navbar-item--desktop" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/events">
              Events
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/menu">
              Menu
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>

          <Link className="navbar-brand no-hover" to="/">
              <span className="navbar-brand-name font-business-name">
                Shivers Shaved Ice
              </span>
              <span className="navbar-brand-city">
                Gibsonia, PA
              </span>
          </Link>

          <div className="navbar-social">
            <a className="no-hover navbar-social-individual" href="https://www.facebook.com/shiverspgh">
              <FaFacebookF />
            </a>
            <a className="no-hover" href="https://www.instagram.com/shiverspgh/">
              <FaInstagram />
            </a>
          </div>

        </div>
      </nav>
    )
  }
}

export default Navbar
