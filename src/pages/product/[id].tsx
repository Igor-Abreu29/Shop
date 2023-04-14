import { stripe } from "../..//lib/stripe"
import { Details, ImageContainer, ProductContainer } from "@/src/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Stripe from "stripe"
import axios from 'axios'
import Head from "next/head"

interface ProductProps {
    product: {
      id: string
      name: string
      imageURL: string  
      price: string
      description: string
      defaultPriceId: string,
    }
  }

export default function Product({ product }: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct() {
        try {
            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        }
        catch(err) {
            alert("Falha ao redirecionar para compra!")
        }
    }

    const { isFallback } = useRouter()

    if (isFallback) {
        return <p>Olá</p>
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={ product.imageURL } width={520} height={480} alt="" />
                </ImageContainer>

                <Details>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>

                    <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
                        Comprar
                    </button>
                </Details>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {id: 'prod_NIn4sCMj9HY6l4'}
            }
        ],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }: any) => {
    const productID = params.id

    const product = await stripe.products.retrieve(productID, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price

    const priceInCents = price.unit_amount as number

    return {
        props: {
            product: {
                id: product.id,
                name: product.name, 
                imageURL: product.images[0],
                price: new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(priceInCents / 100),
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1,
    }
}