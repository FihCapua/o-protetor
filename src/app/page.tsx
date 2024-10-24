'use client'

import { Image } from '@/components/Image'
import Link from '@/components/Link'
import Logo from '../../public/assets/images/logo-o-protetor.svg'
import { Container, LinkComponent } from './style'
import { TextComponent, TitleComponent } from '@/components/Typography'

export default function Home() {
  return (
    <Container>
      <div>
        <Image src={Logo} alt="O Protetor" width={350} height={400} />
          <TitleComponent as='h1'>O Protetor</TitleComponent>
      </div>

      <div>
        <TextComponent as='p'>A tranquilidade que você precisa, sempre a mão</TextComponent>
      </div>

      <LinkComponent>
        <Link href={'/register'}>Registrar-se</Link>
      </LinkComponent>
    </Container>
  )
}
