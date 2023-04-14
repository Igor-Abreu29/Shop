import { ButtonContent, HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { Handbag } from "phosphor-react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageURL: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head> 
      
      <HomeContainer ref={ sliderRef } className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`./product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageURL} width={520} height={480} alt="" />
        
                <footer>
                  <div>                    
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <ButtonContent>
                    <Handbag size={28} color={'#FFF'} />
                  </ButtonContent>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    const priceInCents = price.unit_amount as number

    return {
      id: product.id,
      name: product.name, 
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
      }).format(priceInCents / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}