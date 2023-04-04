import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {
  AiOutlineLineChart,
  AiFillDatabase,
} from 'react-icons/ai';
import {
  BsDatabaseFillAdd,
} from 'react-icons/bs';
import {
	BiLogInCircle,
} from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Realtime',
    path: '/realtime',
    icon: <AiOutlineLineChart />
  },
  {
    title: 'Daftar Data User',
    path: '/overview',
    icon: <AiFillDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tabel User Aktif',
        path: '/overview/users',
        icon: <AiFillDatabase />
      },
      {
        title: 'Tabel User Nonaktif',
        path: '/overview/revenue',
        icon: <AiFillDatabase />
      }
    ]
  },
  {
    title: 'Daftar Data Pengolahan',
    path: '/reports',
    icon: <BsDatabaseFillAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tabel Pembangkit',
        path: '/reports/reports1',
        icon: <BsDatabaseFillAdd />,
        cName: 'sub-nav'
      },
      {
        title: 'Tabel Tegangan',
        path: '/reports/reports2',
        icon: <BsDatabaseFillAdd />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Login',
    path: '/support',
    icon: <BiLogInCircle />
  }
];
