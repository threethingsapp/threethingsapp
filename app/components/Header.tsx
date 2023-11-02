import Image from "next/image";
import { Avatar, Heading } from "./";

type Props = {};

const Header = ({}: Props): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Heading variant="v500">Home</Heading>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: '4px'
        }}
      >
        <Image
          src="/search.svg"
          alt="search"
          style={{ margin: "0 auto" }}
          width={24}
          height={24}
          priority
        />

        <Avatar />
      </div>
    </div>
  );
};

export { Header };
