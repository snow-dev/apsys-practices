/** Created: 4/26/19 by: snow-dev **/
/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import Root from '../../../../store/Root';
import HeaderContainer from '../HeaderContainer';

/** Components section import **/

describe('HeaderContainer', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HeaderContainer/>
      </Root>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a HeaderComponent component', () => {
    expect(wrapper.find('HeaderComponent').length).toEqual(1);
  });
});
