import React from 'react';
import formatCurrency from 'format-currency';
import striptags from 'striptags';
import removeMd from 'remove-markdown';

import './DiscussionItem.css';

export const formatStr = (str) => (
  str
    .replace(/<\/\w+>|<\w+(\s[\w="'#:/.-]+)*>|[-#*]+/gi, '')
    .replace(/https?:\/\/([\w\d-]+\.)?[\w\d-]+\.[\w\d-]+(\/[\w\d-]+)*(\.[\w\d-]+)?/gi, '')
    .substr(0, 120)
    .trim() + '...'
);

const DiscussionItem = ({ discussion }) => {
  return (
    <div className="discussion-item">
      <div className="title">
        <p>
          <a href={"http://steemit.com" + discussion.url}
             target="_blank" rel="noopener noreferrer">
            { discussion.title }
          </a>
        </p>
      </div>

      <div className="summary">
        <p>
          { removeMd(formatStr(striptags(discussion.body))) }
        </p>
      </div>

      <div className="metadata">
        <span className="payout-value">
          { formatCurrency(discussion.pending_payout_value, { format: '%s%v', symbol: '$' }) }
        </span>

        <span className="upvotes" title="upvotes">
          <i className="fa fa-caret-up"></i>{ discussion.net_votes }
        </span>

        <span className="comment-count" title="comment count">
          <i className="fa fa-comment"></i>{ discussion.children }
        </span>

        <span className="author">
          created by { discussion.author }
        </span>

        <span className="category">
          in
          <a href={"http://steemit.com/trending/" + discussion.category}
             target="_blank" rel="noopener noreferrer">
            { discussion.category }
          </a>
        </span>
      </div>

    </div>
  );
};

export default DiscussionItem;