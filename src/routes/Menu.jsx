import React from 'react';
import MenuLinks from '../components/MenuLinks';
import Message from '../components/Message';

export default function Menu() {
  return (
    <div className="page menu">
      <Message />
      <MenuLinks />
    </div>
  )
}
