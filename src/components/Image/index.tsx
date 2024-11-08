import React from 'react'
import ImageNext from 'next/image'
import { ImageProps } from '@/types'

const isStaticImageData = (src: ImageProps['src']) => {
  return typeof src === 'object' && 'src' in src
}

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, priority }) => {
  if (typeof src === 'string' || isStaticImageData(src)) {
    return <ImageNext src={src} alt={alt} width={width} height={height} priority={priority} />
  }
}