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


export class HomeComponent extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  
  
  render() {
    return (
      <div className="store">
        <div className="store__header">
          <div className="header-text">
            <h1>Hungry?</h1>
            <h3>Don’t worry. We got you covered.</h3>
            <p>Order now and we’ll send your food from our nearest restaurant so you can eat ASAP</p>
            <div className="btn btn__primary">Order now</div>
          </div>
        </div>
        <div className="store__categories">
          <div className="card">Card 1</div>
          <div className="card">Card 2</div>
          <div className="card">Card 3</div>
          <div className="card">Card 3</div>
          <div className="card">Card 3</div>
        </div>
        <div className="store__carousel">
          <h2>Here should be a carousel xD</h2>
        </div>
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