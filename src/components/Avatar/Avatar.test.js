import React from 'react';
import { Avatar } from './Avatar';
import renderer from 'react-test-renderer';

import { shallow, mount, render } from 'enzyme';

test('Avatar render', () => {
  const component = renderer.create(
    <Avatar size = 'large' defaultName = 'AB' />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// test('Avatar without image should render default color circle', () => {
//     expect(shallow(<Avatar size = 'large' defaultName = 'AB' />)
//       .contains(<div className="avatar_default">AB</div>))
//         .toBe(true);
// });