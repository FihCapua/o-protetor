import { LinkProps } from '@/types'
import NextLink from 'next/link'

function Link({ children, href = '/', target = '_blank', rel = 'noopener noreferrer' }: LinkProps) {
  return <NextLink href={href} target={target} rel={rel}>{children}</NextLink>
}

export default Link