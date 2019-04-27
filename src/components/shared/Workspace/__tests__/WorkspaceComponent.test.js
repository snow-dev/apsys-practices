/** Created: 4/27/19 by: snow-dev **/

/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {shallow, mount} from 'enzyme';

/** Components section import **/
import {WorkspaceComponent} from '../WorkspaceComponent';

describe('WorkspaceComponent', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = shallow(
      <WorkspaceComponent/>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a .workspace element', () => {
    expect(wrapper.find('.workspace').length).toEqual(1);
  });
  
  it('should render a HomeContainer component', () => {
    expect(wrapper.find('HomeContainer').length).toEqual(1);
  });
  
});
