import { Button, Icon, IconNames } from '@/app/components';

import styles from './FooterNav.module.css';

type Props = {};

const FooterNav = ({}: Props): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Button theme="clear" onClick={() => null}>
        <Icon name={IconNames.Home} />
      </Button>

      <Button theme="primary" onClick={() => null} className={styles.plusPill}>
        <Icon name={IconNames.Plus} />
      </Button>

      <Button theme="clear" onClick={() => null}>
        <Icon name={IconNames.Notepad} />
      </Button>
    </nav>
  );
};

export { FooterNav };
