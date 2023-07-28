import { Link } from 'react-router-dom';

import ArrowUpIcon from '@/components/icons/ArrowUpIcon';

import classes from './Footer.module.scss';

const Footer = () => {
  const scrollTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <Link to="#会員登録">会員登録</Link>
        <Link to="#運営会社">運営会社</Link>
        <Link to="#利用規約">利用規約</Link>
        <Link to="#個人情報の取扱について">個人情報の取扱について</Link>
        <Link to="#特定商取引法に基づく表記">特定商取引法に基づく表記</Link>
        <Link to="#お問い合わせ">お問い合わせ</Link>
      </div>
      <button className={classes.btnScroll} onClick={scrollTop}>
        <ArrowUpIcon />
      </button>
    </div>
  );
};

export default Footer;
