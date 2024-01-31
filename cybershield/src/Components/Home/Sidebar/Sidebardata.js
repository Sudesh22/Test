import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/reports',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Signout',
    path: '/support',
    icon: <GoIcons.GoSignOut />,
    cName: 'nav-text'
  }
];