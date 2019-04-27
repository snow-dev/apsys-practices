/** Created: 4/26/19 **/

/** Import react section **/
import React, {Component} from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

/**  Redux section import **/
import {connect} from 'react-redux';

/** Import component section **/
import HomeComponent from './HomeComponent';

/** Import helpers section **/

/** Import resources section **/

/** Import UI components **/


export class HomeContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return <HomeComponent/>;
  }
}

/**
 * Validate properties that component needs.
 * @type {{}}
 */
HomeContainer.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);