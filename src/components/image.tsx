"use client";

import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { images } from "../../public/images";

interface ImagePropsBase {
  source?: keyof typeof images;
  src?: NextImageProps["src"];
}

type ImageProps = Omit<NextImageProps, "src"> & {
  source?: keyof typeof images;
  src?: NextImageProps["src"];
} & (
    | Required<Pick<ImagePropsBase, "source">>
    | Required<Pick<ImagePropsBase, "src">>
  );

export const Image: React.FC<ImageProps> = ({ alt, source, src, ...rest }) => {
  return <NextImage alt={alt} src={source ? images[source] : src} {...rest} />;
};

type BackgroundImageProps = ImageProps;

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  alt,
  style,
  sizes = "100vw",
  ...props
}) => {
  return (
    <Image
      alt={alt}
      quality={100}
      fill
      priority
      placeholder="blur"
      sizes={sizes}
      style={{
        objectFit: "cover",
        ...style,
      }}
      {...props}
    />
  );
};
