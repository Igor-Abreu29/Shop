import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";

import { ImageContainer, SucessContainer } from "../styles/pages/sucess";

interface SucessProps {
    customerName: string
    product: {
        name: string
        imageUrl: string
    }
}

export default function Sucess({customerName, product}: SucessProps) {
    return (
        <>
            <Head>
                <title>Compra efeutada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>
            <SucessContainer>
                <h1>Compra Efetuada com Sucesso!</h1>

                <ImageContainer>
                    <Image src={product.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <p>
                    Uhuul, <strong>{customerName}</strong>,
                    sua <strong>{product.name}</strong> já está a caminho de sua casa
                </p>

                <Link href={'/'}>
                    Voltar ao catálogo
                </Link>
            </SucessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })
    
    const sessionCustomer = session.customer_details as Stripe.Checkout.Session.CustomerDetails;
    const customerName = sessionCustomer.name
    const sessionLineItems = session.line_items as any
    const product = sessionLineItems.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }
        }
    }
}