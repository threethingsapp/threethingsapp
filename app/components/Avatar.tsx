import Image from "next/image";

export type AvatarProps = {
  image?: string | undefined | null;
  className?: string;
  style?: any;
  alt?: string;
};

const DEFAULT_IMAGE = "/avatar.svg";
const IMAGE_SIZE = "32";

const Avatar = ({
  image = DEFAULT_IMAGE,
  className,
  style,
  alt = "alt",
}: AvatarProps): JSX.Element => {
  // if I want to set the image throw css I can send a null image.
  const nulledImage = image === null;

  // if I set the image throw css I need to fix the image size.
  if (nulledImage) {
    style = { ...style, width: `${IMAGE_SIZE}px`, height: `${IMAGE_SIZE}px` };
  }

  return (
    <Image
      src={nulledImage ? "" : image ?? DEFAULT_IMAGE}
      alt={nulledImage ? "" : alt}
      style={style}
      width={IMAGE_SIZE}
      height={IMAGE_SIZE}
      priority
      className={className}
    />
  );
};

export { Avatar };
