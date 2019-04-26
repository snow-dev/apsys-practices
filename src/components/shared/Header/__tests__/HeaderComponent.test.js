/** Created: 4/26/19 by: snow-dev **/

/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import Root from '../../../../store/Root';
import HeaderComponent from '../HeaderComponent';

describe('HeaderComponent', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <HeaderComponent/>
      </Root>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a header .header-component element', () => {
    expect(wrapper.find('.header-component').length).toEqual(1);
  });
});
