import Image from "next/image";

type Props = {
  image?: string;
};

// const wrapperStyle = css({})

const DEFAULT_IMAGE = "/avatar.svg";

const Avatar = ({ image = DEFAULT_IMAGE }: Props): JSX.Element => {
  return (
    <div>
      <Image
        src={image}
        alt="3d"
        style={{ margin: "0 auto" }}
        width={32}
        height={32}
        priority
      />
    </div>
  );
};

export { Avatar };
