'use client'

import { Image } from '@/components/Image'
import Link from '@/components/Link'
import Logo from '../../public/assets/images/logo-o-protetor.svg'
import { Container, LinkComponent } from './style'
import { TextComponent, TitleComponent } from '@/components/Typography'
import { ButtonComponent } from '@/components/Button'

export default function Home() {
  return (
    <Container>
      <div>
        <Image src={Logo} alt="O Protetor" width={350} height={400} priority />
          <TitleComponent as='h1'>O Protetor</TitleComponent>
      </div>

      <div>
        <TextComponent as='p'>A tranquilidade que você precisa, sempre a mão</TextComponent>
      </div>

      <LinkComponent>
        <Link href={'/login'} target='_self'>
          <ButtonComponent size='medium' variant='secondary' fullWidth>
            Login
          </ButtonComponent>
        </Link>

        <TextComponent as="span">Ainda não possui cadastro?</TextComponent>
        <Link href={'/register'} target='_self'>
          <ButtonComponent size='medium' variant='secondary' fullWidth>
            Registre-se
          </ButtonComponent>
        </Link>
      </LinkComponent>
    </Container>
  )
}
