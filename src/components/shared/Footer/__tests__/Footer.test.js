/** Created: 4/27/19 by: snow-dev **/

/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';

/** Components section import **/
import Footer from '../Footer';
import Root from '../../../../store/Root';

describe('Footer.test', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <Footer/>
      </Root>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a header Footer element', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});
