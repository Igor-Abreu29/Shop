import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('section', {
    width: '100%',
    maxWidth: 576,
    height: 656,
    background: 'linear-gradient(180deg, #1ea484, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    },
})

export const Details = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        color: '$gray300',
        fontSize: '$md',
        lineHeight: 1.6,
    },

    button: {
        marginTop: 'auto',
        background: '$green500',
        color: "$white",
        border: 'none',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
        transition: 'background-color 0.2s',

        '&:disabled:': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled):hover': {
            background: '$green300',
        }
    }
})