import React from 'react';

import { shallow } from 'enzyme';
import expect from 'expect';

import App from './App';

test('It renders the app component correctly', () => {
  let app = shallow(<App />);

  expect(app.find('.bottom').text()).toEqual('trending');

  expect(app.find('h1').text()).toEqual('Mini Steem');
  expect(app.find('SteemTrending').length).toEqual(1);
});
