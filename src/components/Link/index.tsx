import { LinkProps } from '@/types'
import NextLink from 'next/link'

function Link({ children, href = '/' }: LinkProps) {
  return <NextLink href={href}>{children}</NextLink>
}

export default Link