import Image from "next/image";

export enum IconNames {
  Search = 'search',
  Books = 'books',
  Work = 'work',
  Urgent = 'urgent',
  Email = 'email',
  Plus = 'plus',
  Home = 'home',
  Notepad = 'notepad'
}

const IconsMap: Record<IconNames, string> = {
  [IconNames.Search]: "/search.svg",
  [IconNames.Books]: "/books.svg",
  [IconNames.Work]: "/work.svg",
  [IconNames.Urgent]: "/urgent.svg",
  [IconNames.Email]: "/email.svg",
  [IconNames.Plus]: "/plus.svg",
  [IconNames.Home]: "/home.svg",
  [IconNames.Notepad]: "/notepad.svg",
}

const DEFAULT_SIZE = 24;

type Props = {
  name: IconNames;
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
