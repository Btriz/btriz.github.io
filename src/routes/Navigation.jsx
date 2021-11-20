import React from 'react'
import { Outlet } from 'react-router';
import Links from '../components/Links';
import Message from '../components/Message';

export default function Navigation() {
  return (
    <div className="page navigation">
      <Message />
      { Links("navigation-links") }
      <Outlet />
    </div>
  )
}
