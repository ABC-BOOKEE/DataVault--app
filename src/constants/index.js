import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navigationlinks = [
  {
    name: 'View Files',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'Upload',
    imgUrl: createCampaign,
    link: '/dashboard/upload',
  },
  {
    name: 'Buy storage',
    imgUrl: payment,
    link: '/buy',
    disabled: true,
  },
];
