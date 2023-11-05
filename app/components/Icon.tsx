import Image from "next/image";

enum IconsMap {
  search = "/search.svg",
}

type Props = {
  name: 'search';
};

const Icon = ({ name }: Props): JSX.Element => {
  return (
    <Image
      src={IconsMap[name]}
      alt="search"
      width={24}
      height={24}
      priority
    />
  );
};

export { Icon };
