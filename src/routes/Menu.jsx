import React from 'react';
import Links from '../components/Links';
import Message from '../components/Message';

export default function Menu() {
  return (
    <div className="page menu">
      <Message />
      { Links("menu-links") }
    </div>
  )
}
