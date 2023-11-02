import { Button, Header, Heading, Layout } from "../components";
import styles from './home.module.css';

type Props = {};

const Home = ({}: Props): JSX.Element => {
  const userName = "Erlich Bachman";

  return (
    <Layout>
      <Header page="home" />

      <Heading variant="v100">Hello</Heading>
      <Heading variant="v100">{userName}</Heading>

      <div className={styles['button-wrapper']}>
        <Button title="Overview" size="small" theme="primary"/>
        <Button title="Productivity" size="small" theme="clear" />
      </div>
    </Layout>
  )
};

export default Home;
