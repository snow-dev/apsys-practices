/** Created: 4/27/19 by: snow-dev **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

/** Language imports **/
import {withLocalize} from 'react-localize-redux';
import {HomeContainer} from '../../Home/HomeContainer';

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


export class WorkspaceComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return (
      <div className="workspace">
        <HomeContainer/>
      </div>
    );
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
WorkspaceComponent.propTypes = {};

export default withLocalize(WorkspaceComponent);