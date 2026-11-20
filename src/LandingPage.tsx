import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppAppBar from './components/AppAppBar'
import Welcome from './components/Welcome'
import Features from './components/Features'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import getLPTheme from './getLPTheme'

export default function LandingPage() {
  const theme = React.useMemo(() => createTheme(getLPTheme('light')), [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <Box component="main" sx={{ bgcolor: 'background.default' }}>
        <Welcome />
        <Features />
        <Pricing />
        <FAQ />
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
