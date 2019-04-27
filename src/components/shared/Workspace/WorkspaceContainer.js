/** Created: 4/27/19 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

/**  Redux section import **/
import {connect} from 'react-redux';
import WorkspaceComponent from './WorkspaceComponent';
import {HomeContainer} from '../../Home/HomeContainer';

/** Import component section **/

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


class WorkspaceContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return <HomeContainer/>;
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
WorkspaceContainer.propTypes = {};

/**
 * Map some parameters from store to be injected to component.
 * @param store
 * @returns {{}}
 */
function mapStateToProps(store) {
  return {};
}

/**
 * Map some actions to be injected as props.
 * @param dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);