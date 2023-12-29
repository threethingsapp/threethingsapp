import css from 'classnames';
import { useRouter } from 'next/navigation';
import { Button, Icon, IconNames } from '@/app/components';

import styles from './Footer.module.css';

type Props = {
  route: string;
  isSelected: boolean;
  iconName: IconNames;
};

const FooterButton = ({ route, isSelected, iconName }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <Button theme="clear" onClick={() => router.push(route)}>
      <>
        <Icon name={iconName} />

        { isSelected && <div className={css(styles.selected)}></div>}
      </>
    </Button>
  )
};

export { FooterButton };
