import Image from "next/image";

enum IconsMap {
  search = "/search.svg",
  books = "/books.svg",
  work = "/work.svg",
  urgent = "/urgent.svg",
  email = "/email.svg",
  plus = "/plus.svg",
  home = "/home.svg",
  notepad = "/notepad.svg",
}

const DEFAULT_SIZE = 24;

type Props = {
  name: 'search' | 'books' | 'work' | 'urgent' | 'email' | 'plus' | 'home' | 'notepad';
  height?: number;
  width?: number;
};

const Icon = ({ name, width = DEFAULT_SIZE, height = DEFAULT_SIZE }: Props): JSX.Element => {
  return (
    <Image
      src={IconsMap[name]}
      alt={name}
      width={width}
      height={height}
      priority
    />
  );
};

export { Icon };
