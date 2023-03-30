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
	BiLogInCircle, BiMessageRounded,
} from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Realtime',
    path: '/realtime',
    icon: <AiOutlineLineChart />
  },
  {
    title: 'Login',
    path: '/signin',
    icon: <BiLogInCircle />
  }
];

export const SidebarData_Admin = [
  {
    title: 'Realtime',
    path: '/realtime',
    icon: <AiOutlineLineChart />
  },
  {
    title: 'Daftar Data User',
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
        path: '/overview/usersinvalid',
        icon: <AiFillDatabase />
      }
    ]
  },
  {
    title: 'Daftar Data Pengolahan',
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
    title: 'Data Operasi',
    path: '/dataoperasi',
    icon: <AiIcons.AiFillFolderOpen />
  },
  {
    title: 'Dokumentation',
    path: '/dokumentation',
    icon: <AiIcons.AiFillFolderOpen />
  },
  {
    title: 'Forum',
    path: '/Forum',
    icon: <BiMessageRounded />
  },
];

export const SidebarData_Dispacher = [
  {
    title: 'Realtime',
    path: '/realtime',
    icon: <AiOutlineLineChart />
  },
  {
    title: 'Daftar Data Pengolahan',
    icon: <BsDatabaseFillAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tabel Tegangan',
        path: '/reports/reports2',
        icon: <BsDatabaseFillAdd />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Dokumentation',
    path: '/dokumentation',
    icon: <AiIcons.AiFillFolderOpen />
  },
  {
    title: 'Forum',
    path: '/Forum',
    icon: <BiMessageRounded />
  },
];

export const SidebarData_Pegawai = [
  {
    title: 'Realtime',
    path: '/realtime',
    icon: <AiOutlineLineChart />
  },
  {
    title: 'Dokumentation',
    path: '/dokumentation',
    icon: <AiIcons.AiFillFolderOpen />
  },
  {
    title: 'Forum',
    path: '/Forum',
    icon: <BiMessageRounded />
  },
];
