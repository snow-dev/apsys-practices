/** Created: 4/26/19 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


class HomeComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return (
      <div className="home">
        <h2>home-component</h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HomeComponent.propTypes = {};

export default withLocalize(HomeComponent);