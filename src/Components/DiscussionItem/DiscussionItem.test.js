import React from 'react';

import { shallow } from 'enzyme';
import expect from 'expect';

import DiscussionItem from './';
import { formatStr } from './'

const discussionItem = () => {
  let props = {
                body: '<h1>the rise of bitcoin</h1> ## markdown content',
                title: 'bitcoin will rise',
                url: '/bitcoin-alt',
                pending_payout_value: '1200',
                net_votes: '1200',
                children: '42',
                author: 'james',
                category: 'life'
              };

  return shallow(<DiscussionItem discussion={props} />)
};

let app = discussionItem();

test('It renders the body property correctly', () => {
  expect(app.find('.summary p').text()).toEqual('the rise of bitcoin  markdown content...');
});

test('It renders the title property correctly', () => {
  expect(app.find('.title a').text()).toEqual('bitcoin will rise');
});

test('It links the url to the right address', () => {
  expect(app.find('.title a').prop('href')).toEqual('http://steemit.com/bitcoin-alt');
});

test('It renders the pending_payout_value property value correctly', () => {
  expect(app.find('.payout-value').text()).toEqual('$1,200.00');
});

test('It renders the net_votes property value correctly', () => {
  expect(app.find('.upvotes').text()).toEqual('1200');
});

test('It renders the children property value correctly', () => {
  expect(app.find('.comment-count').text()).toEqual('42');
});

test('It renders the author property value correctly', () => {
  expect(app.find('.author').text()).toEqual('created by james');
});

test('It renders the category property value correctly', () => {
  expect(app.find('.category').text()).toEqual('inlife');
});

test('It links the category to the right address', () => {
  expect(app.find('.category a').prop('href')).toEqual('http://steemit.com/trending/life');
});

test('formatStr function removes url in a string and truncates the string', () => {
  let str = "picture is here http://steemit.com/pix.jpg";

  expect(formatStr(str)).toEqual('picture is here...');
});

