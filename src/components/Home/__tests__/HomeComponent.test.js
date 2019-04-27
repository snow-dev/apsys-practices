/** Created: 4/26/19 by: snow-dev **/

/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {shallow} from 'enzyme';

/** Components section import **/
import {HomeComponent} from '../HomeComponent';


describe('HomeComponent', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   *
   * Here first we gonna make this test fail, using shallow instead mount.
   * We will use wrapper.debug() to show whats happening or debugger.
   */
  beforeEach(() => {
    wrapper = shallow(
      <HomeComponent/>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a header home element', () => {
    // We show  the wrapper value on terminal,
    // debug() help us to quickly show which wrong with our assertions.
    // console.log(wrapper.debug());
    // -> Now we can easily look for .home element using its className.
    expect(wrapper.find('.home').length).toEqual(1);
  });
});


