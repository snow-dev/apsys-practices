/** Created: 4/26/19 by: snow-dev **/
/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import HomeContainer from '../HomeContainer';
import Root from '../../../store/Root';

/** Components section import **/

describe('HomeContainer', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HomeContainer/>
      </Root>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a  component', () => {
    expect(wrapper.find('HomeComponent').length).toEqual(1);
  });
});
