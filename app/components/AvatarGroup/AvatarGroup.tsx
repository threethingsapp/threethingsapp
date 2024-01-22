"use client";

import { Avatar } from "@/app/components";
import type { AvatarProps } from "@/app/components";

type Props = {
  images: AvatarProps[];
};

const AvatarGroup = ({ images }: Props): JSX.Element => {
  return (
    <div style={{ display: 'flex' }}>
      {images?.map(({ className, image }, index) => {
        const factor = images.length - index - 1;

        return (
          <Avatar
            key={index}
            image={image}
            className={className}
            style={{
              transform: `translateX(${factor * 40}%)`,
              position: 'relative',
              zIndex: factor + 1,
            }}
          />
        );
      })}
    </div>
  );
};

export { AvatarGroup };
