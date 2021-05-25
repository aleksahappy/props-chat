import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

export default function MessageHistory({list}) {
  if (!list || !list.length) {
    return null;
  }

  const messageTypes = {
    message: Message,
    response: Response,
    typing: Typing
  };

  return (
    <ul>
      {list.map(message => {
        const MessageComponent = messageTypes[message.type];
        return <MessageComponent key={message.id} from={message.from} message={message}/>;
      })}
    </ul>
  )
}

MessageHistory.defaultProps = {
  list: []
};

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};
