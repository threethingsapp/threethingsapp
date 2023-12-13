import { Colors } from '@/app/constants/colors';
import { Button, Icon, Pill } from '@/app/components';

import styles from './FooterNav.module.css';

type Props = {};

const FooterNav = ({}: Props): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Button theme="clear">
        <Icon name="home" />
      </Button>

      <Button theme="clear">
        <Pill color={Colors.BLUE} className={styles.plusPill}>
          <Icon name="plus" />
        </Pill>
      </Button>

      <Button theme="clear">
        <Icon name="notepad" />
      </Button>
    </nav>
  );
};

export { FooterNav };
