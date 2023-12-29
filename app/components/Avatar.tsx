import Image from "next/image";

export type AvatarProps = {
  image?: string | undefined | null;
  className?: string;
  style?: any;
  alt?: string;
  imageSize?: number;
};

const DEFAULT_IMAGE = "/avatar.svg";
const IMAGE_SIZE = 32;

const Avatar = ({
  image = DEFAULT_IMAGE,
  className,
  style,
  alt = "alt",
  imageSize = IMAGE_SIZE 
}: AvatarProps): JSX.Element => {
  // if I want to set the image throw css I can send a null image.
  const nulledImage = image === null;

  // if I set the image throw css I need to fix the image size.
  if (nulledImage) {
    style = { ...style, width: `${imageSize}px`, height: `${imageSize}px` };
  }

  return (
    <Image
      src={nulledImage ? "" : image ?? DEFAULT_IMAGE}
      alt={nulledImage ? "" : alt}
      style={style}
      width={imageSize}
      height={imageSize}
      priority
      className={className}
    />
  );
};

export { Avatar };
