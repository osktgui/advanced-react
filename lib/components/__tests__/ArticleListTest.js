import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

import enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        { ...testProps }
      />
    );
    const element = wrapper.getElement();

    expect(wrapper.find('Article').length).toBe(2);
    expect(element.props.children.length).toBe(2);
    expect(element).toMatchSnapshot();
  });
});
