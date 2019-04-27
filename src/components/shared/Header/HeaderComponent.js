/** Created: 4/26/19 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
// import PropTypes from 'prop-types';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/
import yarn from '../../../resources/images/yarn.svg';

/** Import UI components **/


class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  render() {
    return (
      <div className="header">
        <img alt="shelfish-logo" src={yarn}/>
        <ul>
          <li>Nuestra tienda</li>
          <li>Contacto</li>
        </ul>
        <button className="btn btn__primary-outline"
                onClick={this.props.loginHandler}>
          {
            this.props.isLogged === false ? 'Log In' : "Log Out"
          }
        </button>
      </div>
    );
  }
}



/**
 * Validate properties that component needs.
 * @type {{}}
 */
HeaderComponent.propTypes = {};

export default withLocalize(HeaderComponent);