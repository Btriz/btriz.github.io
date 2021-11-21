import React from 'react'
import { Outlet } from 'react-router';
import { Links, Message } from '../exports';

export default function Navigation() {
  return (
    <div className="page navigation">
      <Message />
      { Links("navigation-links") }
      <Outlet />
    </div>
  )
}
