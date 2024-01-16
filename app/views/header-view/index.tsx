import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/Vector.png';
import styles from './index.module.css';

type Props = {
  email?: string;
  logView: string;
  link: string;
};

export const HeaderView = memo(({ email, logView, link }: Props) => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image alt="Logo" height={33} src={logo} style={{ cursor: 'pointer' }} width={142} />
      </Link>

      <h2 className={styles.header__text}>
        <span className={styles.header__span}>{email}</span>
        <a href={link}>{logView}</a>
      </h2>
    </div>
  );
});
