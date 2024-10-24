    import { AppBar, Box, Typography } from '@mui/material'
    import React from 'react'
    import Footer from './Footer'
    import Header from './Header'

    const Layout = ({ children }) => {
        return (
            <>
                <Header/>
                <div>{children}</div>
                <Footer/>
            </>
        )
    }
                
    export default Layout;