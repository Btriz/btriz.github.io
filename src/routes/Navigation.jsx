import React from 'react'
import { Outlet } from 'react-router';
import { Links, Message, pink } from '../exports';

export default function Navigation() {
  return (
    <div className="page navigation">
      <header style={{backgroundImage: `url(${pink})`}} >
        <Message />
        { Links("navigation-links") }
      </header>

      <Outlet />
    </div>
  )
}
