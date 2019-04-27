/** Created: 4/27/19 by: snow-dev **/
/** React section import **/
import React from 'react';

/** Enzyme/Jest section imports **/
import {mount} from 'enzyme';
import WorkspaceContainer from '../WorkspaceContainer';
import Root from '../../../../store/Root';

/** Components section import **/

describe('WorkspaceContainer.test', () => {
  let wrapper;
  
  /**
   * For each test, we wrap component with Root (Provider).
   */
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <WorkspaceContainer/>
      </Root>
    );
  });
  
  afterEach(() => {
    wrapper.unmount();
  });
  
  /**
   * After each test we unmount component, to avoid garbage on the next tests.
   */
  it('should render a WorkspaceContainer component', () => {
    expect(wrapper.find('WorkspaceComponent').length).toEqual(1);
  });
});
