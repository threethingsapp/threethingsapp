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
        <Button size="small" title="Overview" theme="primary"/>
        <Button size="small" title="Productivity" theme="outline" />
      </div>
    </Layout>
  )
};

export default Home;
