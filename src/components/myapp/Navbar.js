import React from 'react';
import logo from 'logo.png';
import DatePick from './DatePick';

import { withAuthState } from 'components/hoc/auth';
function Navbar({ loggedInUser, logout }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="" width="55" height="50" className="d-inline-block align-text-top" />
          <h1 className="pt-2">TODO</h1>
        </a>
        <DatePick />
        <div>
          <h2 className="text-capitalize">{loggedInUser.first_name}</h2>
          <div className="navbar-nav">
            <a className="btn nav-link active text-primary" onClick={logout}>
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav >
  );
}

// const mapDispatchToProps = (dipatch)=>{
//   return {logout:()=>dispatch()}
// }
export default withAuthState(Navbar);
