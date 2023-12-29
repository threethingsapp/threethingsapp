import { ReactElement } from "react";
import {
  Header,
  Layout,
  FooterNav
} from "@/app/components";

type Props = {
  children: ReactElement | ReactElement[];
};

const LoggedLayout = ({ children }: Props): JSX.Element => {
  return (
    <Layout>
      <Header page="Home" />

      <>{children}</>

      <FooterNav />
    </Layout>
  )
};

export { LoggedLayout };
