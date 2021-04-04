import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {//result from auth reducer by fetchUser action(alredy applied in app.js)
      case null:
        return;
      case false:
        return (
          <li><a href = "/auth/google">Login With Google</a></li>
        );
      default:
        return [
          <li key = "1"><Payments /></li>,//payments component bind with handletoken action in Payment.js
          <li key = "3" style = {{margin: '0 10px'}}>
            Credits: {this.props.auth.credits}
          </li>,//result from auth reducer by handletoken action
          <li key = "2"><a href = "api/logout">Logout</a></li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
          to = {this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
          >Quickvey
          </Link>
          <ul className="right">
            {this.renderContent()}
         </ul>
       </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}) {//select state to connect with header
  return {auth};
}

export default connect(mapStateToProps)(Header);
