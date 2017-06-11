import React from 'react';

import { shallow } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import steem from 'steem';

import SteemTrending from './';

let steemTrending = new SteemTrending();

beforeAll(() => {
  sinon.stub(steem.api, 'getDiscussionsByTrending').yields(null, [{res: 'success'}]);
});

test('it has a state of discussion that is an empty array by default', () => {
  expect(steemTrending.state.discussions).toEqual([]);
});

test('it has a state of loading that is set to true by default', () => {
  expect(steemTrending.state.loading).toBeTruthy();
});

test('It renders the steem trending component correctly', () => {
  let app = shallow(<SteemTrending />);

  expect(app.find('DiscussionItem').length).toEqual(1);
  expect(app.state().loading).toBeFalsy();
  expect(app.state().discussions).toEqual([{ res: 'success' }])
});
