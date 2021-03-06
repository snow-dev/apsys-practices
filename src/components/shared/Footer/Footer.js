/** Created: 4/27/19 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


class Footer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return (
      <div className="footer">
        <h2>Created wit love with CSS-Grid </h2>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
Footer.propTypes = {};

export default withLocalize(Footer);