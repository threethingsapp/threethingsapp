"use client";

import css from 'classnames';
import { useRouter, usePathname } from 'next/navigation';
import { Button, Icon, IconNames } from '@/app/components';

import styles from './Footer.module.css';
import { FooterButton } from './FooterButton';

type Props = {};

const FooterNav = ({}: Props): JSX.Element => {
  const router = useRouter();
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <FooterButton
        route='/home'
        iconName={IconNames.Home}
        isSelected={path === '/home'}
      />

      <Button theme="primary" onClick={() => router.push('/daily-progress')} className={styles.plusPill}>
        <Icon name={IconNames.Plus} />
      </Button>

      <FooterButton
        route='/daily-progress'
        iconName={IconNames.Notepad}
        isSelected={path === '/daily-progress'}
      />
    </nav>
  );
};

export { FooterNav };
