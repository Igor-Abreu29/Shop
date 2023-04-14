import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { 
  ButtonClose,
  ButtonContent, 
  Container,
  Header,
  ImageContainer,
  InformationContainer,
  InformationContent,
  NavContainer,
  NavContent,
  SpanTotal,
  TotalContainer, 
} from '../styles/pages/app'
import  Image  from 'next/image'
import logoShop from '../assets/logo.svg'
import { Handbag, X } from "phosphor-react";
import { useState } from 'react'
import { styled } from '../styles'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [side, setSide] = useState<boolean>(false)

  const handleOpenMenu = () => setSide(!side)
 
  return (
    <Container>
      <Header>
          <Image src={logoShop} alt="" /> 

          <ButtonContent onClick={handleOpenMenu}>
            <Handbag size={28} color={'#FFF'} />
          </ButtonContent>

          <NavContainer {...side ? styled(NavContainer, {display: 'block'}) : styled(NavContainer, {display: 'none'})}>
          <NavContent>
            <ButtonClose>
              <X size={20} color={'#FFF'}/>
            </ButtonClose>
            <h2>Sacola de compras</h2>

            <InformationContainer>
              <ImageContainer></ImageContainer>
                <InformationContent>
                    <h2>Camiseta Explorer 2.0</h2>
                    <span>R$ 69,90</span>
                    <button>Remover</button>
                  </InformationContent>
            </InformationContainer>

            <InformationContainer>
              <ImageContainer></ImageContainer>
                  <InformationContent>
                    <h2>Camiseta Explorer 2.0</h2>
                    <span>R$ 69,90</span>
                    <button>Remover</button>
                  </InformationContent>
            </InformationContainer>

            <InformationContainer>
              <ImageContainer></ImageContainer>
                <InformationContent>
                  <h2>Camiseta Explorer 2.0</h2>
                  <span>R$ 69,90</span>
                  <button>Remover</button>
                </InformationContent>
            </InformationContainer>

            <TotalContainer>
              <div>
                <span>Quantidade</span>
                <span>3 itens</span>
              </div>

              <div>
                <span>Valor Total</span>
                <SpanTotal>R$ 210,00</SpanTotal>
              </div>
              <button>Finalizar Compra</button>
            </TotalContainer>
          </NavContent>

          </NavContainer>

      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
