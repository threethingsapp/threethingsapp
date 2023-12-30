import { ReactElement } from "react";
import {
  Header,
  Layout,
  FooterNav,
} from "@/app/components";

type Props = {
  children: ReactElement | ReactElement[];
  title?: string;
  backButton?: boolean;
};

const LoggedLayout = ({ children, title, backButton = false }: Props): JSX.Element => {
  return (
    <Layout>
      <>{title && <Header page={title} backButton={backButton} />}</>

      <>{children}</>

      <FooterNav />
    </Layout>
  )
};

export { LoggedLayout };
