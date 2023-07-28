import { useMemo } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';

import Menu from '@/components/core/Menu';
import MenuOption from '@/components/core/Menu/MenuOption';
import ChallengeIcon from '@/components/icons/ChallengeIcon';
import InfoIcon from '@/components/icons/InfoIcon';
import MemoIcon from '@/components/icons/MemoIcon';
import MenuIcon from '@/components/icons/MenuIcon';

import classes from './Navbar.module.scss';

const Navbar = () => {
  const navigate = useNavigate();

  const menus = useMemo(() => {
    return [
      { label: '自分の記録', href: 'my-record' },
      { label: '体重グラフ', href: '#weight-chart' },
      { label: '目標', href: '#target' },
      { label: '選択中のコース', href: '#selected-course' },
      { label: 'コラム一覧', href: 'recommended' },
      { label: '設定', href: '#setting' },
    ];
  }, []);
  const location = useLocation();

  return (
    <nav className={classes.container}>
      <Link to="/">
        <img className={classes.logo} src="/logo.png" alt="" />
      </Link>
      <div className={classes.navigation}>
        <Link
          to={'/my-record'}
          className={`${classes.navigation__option} ${location.pathname === '/my-record' ? classes.active : ' '}`}
        >
          <MemoIcon />
          自分の記録
        </Link>
        <div className={classes.navigation__option}>
          <ChallengeIcon />
          チャレンジ
        </div>
        <div className={classes.navigation__option}>
          <InfoIcon />
          お知らせ
        </div>
        <div className={classes.menu}>
          <Menu activator={<MenuIcon />}>
            {menus.map((menu, idx) => (
              <MenuOption onClick={() => navigate(menu.href)} key={idx}>
                {menu.label}
              </MenuOption>
            ))}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
