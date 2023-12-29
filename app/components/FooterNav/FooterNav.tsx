"use client";

import css from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Icon, IconNames } from '@/app/components';

import styles from './FooterNav.module.css';

type Props = {};

const FooterNav = ({}: Props): JSX.Element => {
  const router = useRouter();
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <Button theme="clear" onClick={() => router.push('/home')}>
        <>
          <Icon name={IconNames.Home} />

          { path === '/home' && <div className={css(styles.selected)}></div>}
        </>
      </Button>

      <Button theme="primary" onClick={() => router.push('/daily-progress')} className={styles.plusPill}>
        <Icon name={IconNames.Plus} />
      </Button>

      <Button theme="clear" onClick={() => router.push('/daily-progress')}>
        <>
          <Icon name={IconNames.Notepad} />

          { path === '/daily-progress' && <div className={css(styles.selected)}></div>}
        </>
      </Button>
    </nav>
  );
};

export { FooterNav };
