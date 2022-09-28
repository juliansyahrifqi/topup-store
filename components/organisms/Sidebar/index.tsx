import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />

        <div className="menus">
          <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member" />

          <MenuItem title="Transactions" icon="icon-menu-transactions" active={activeMenu === 'transactions'} href="/member/transactions" />

          <MenuItem title="Messages" icon="icon-menu-messages" href="/member" />

          <MenuItem title="Card" icon="icon-menu-card" href="/member" />

          <MenuItem title="Reward" icon="icon-menu-reward" href="/member" />

          <MenuItem title="Settings" icon="icon-menu-settings" active={activeMenu === 'settings'} href="/member/edit-profile" />

          <MenuItem title="Log Out" icon="icon-menu-logout" onClick={onLogout} />
        </div>

        <Footer />
      </div>
    </section>
  );
}
