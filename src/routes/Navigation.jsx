import React from 'react'
import { Outlet } from 'react-router';
import Message from '../components/Message';
import NavigationLinks from '../components/NavigationLinks';

export default function Navigation() {
  return (
    <div>
      <Message />
      <NavigationLinks />
      <Outlet />
    </div>
  )
}
