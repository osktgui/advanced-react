import React from 'react';
import ArticleList from '../ArticleList';

import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        { ...testProps }
      />
    );
    const element = wrapper.getElement();

    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(element.props.children.length).toBe(2);
    expect(element).toMatchSnapshot();
  });
});
