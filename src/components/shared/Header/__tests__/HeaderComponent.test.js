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
  it('should render a header .header element', () => {
    expect(wrapper.find('.header').length).toEqual(1);
  });
  
  it('should have a img element', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  
  it('should render an ul list element', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });
  
  it('should render two li items', () => {
    expect(wrapper.find('li').length).toEqual(2);
  });
});


