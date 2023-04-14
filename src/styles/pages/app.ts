import { styled } from "..";

export const Container = styled('div', {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: 'center',
    flexDirection: "column",
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    maxWidth: 1180,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

export const ButtonContent = styled('button', {
        padding: '0.6rem ',
        borderRadius: 8,
        border: 'none',
        cursor: 'pointer',
        background: '$gray800',
        fontWeight: 'bold',
})

export const NavContainer = styled('nav', {
    background: '$gray800',
    height: '100vh',
    maxWidth: 450,
    width: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 12,

    display: 'none',
})

export const NavContent = styled('div', {
    height: '100vh',
    width: '100%',
    padding: '5rem 3rem', 
    
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '2rem',

    h2: {
        fontSize: '1.25rem',
    }
})

export const ButtonClose = styled('button', {
    background: 'transparent',
    position: 'absolute',
    top: '1rem',
    right: '1.5rem',
    cursor: 'pointer',
    padding: '0.6rem ',
    borderRadius: 8,
    border: 'none',
})

export const InformationContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ImageContainer = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: '10vh',
    width: '100px',
    borderRadius: 8,
})

export const InformationContent = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '0.7rem',

    h2: {
        fontSize: '1.125rem',
        color: '$gray300',
    },

    button: {
        color: '$green500',
        border: 'none',
        background: 'transparent',
        fontSize: '1rem',
        cursor: 'pointer',

        '&:hover': {
            color: '$green300',
            transition: 'color 0.2s',
        }
    }
})

export const TotalContainer = styled('div', {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    button: {
        marginTop: '2rem',
        display: 'block',
        background: '$green500',
        border: 'none',
        color: '$white',
        padding: '1.2rem',
        fontSize: '1rem',
        borderRadius: 8,
        cursor: 'pointer',
    }
})

export const SpanTotal = styled('span', {
    fontSize: '1.5rem',
    fontWeight: 'bold',
})