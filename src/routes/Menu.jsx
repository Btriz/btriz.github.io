import React from 'react';
import { Links, Message } from '../exports';

export default function Menu() {
  return (
    <div className="page menu">
      <Message />
      { Links("menu-links") }
    </div>
  )
}
