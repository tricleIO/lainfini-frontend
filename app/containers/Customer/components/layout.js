import React from 'react';
import { Link } from 'react-router';

class CustomerLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div className="user-settings">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <nav className="user-settings__menu">
                <ul>
                  <li className="active"><Link to="/customer">Customer Menu</Link></li>
                  <li><Link to="/customer/order-history">Historie Objednavek</Link></li>
                  <li><Link to="/customer/complaints">Stiznosti</Link></li>
                  <li><Link to="/customer/addresses">Seznam adress</Link></li>
                  <li><Link to="/customer/settings">Nastaveni uzivatele</Link></li>
                  <li><Link to="/customer/linked-accounts">Propojene ucty</Link></li>
                  <li><Link to="/customer/change-password">Zmena hesla</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-md-9">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CustomerLayout;
