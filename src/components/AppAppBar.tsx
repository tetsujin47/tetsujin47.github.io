import * as React from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import MenuIcon from '@mui/icons-material/Menu'

const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
  margin: '20px', // マージンを追加
  borderRadius: '10%',
}

function AppAppBar() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 80
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      window.scrollTo({ top: targetScroll, behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: 'transparent',
          backgroundImage: 'none',
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL || ''}/favicon.ico`}
                style={logoStyle}
                alt="logo of smartjan"
                onClick={() => scrollToSection('welcome')}
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <MenuItem
                  component="button"
                  onClick={() => scrollToSection('features')}
                  sx={{ py: '6px', px: '12px', cursor: 'pointer' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    スマート雀とは
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('howtouse')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    使い方
                  </Typography>
                </MenuItem> */}
                <MenuItem
                  component="button"
                  onClick={() => scrollToSection('pricing')}
                  sx={{ py: '6px', px: '12px', cursor: 'pointer' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    料金プラン
                  </Typography>
                </MenuItem>
                <MenuItem
                  component="button"
                  onClick={() => scrollToSection('faq')}
                  sx={{ py: '6px', px: '12px', cursor: 'pointer' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    よくある質問
                  </Typography>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => scrollToSection('news')}
                  sx={{ py: '6px', px: '12px' }}
                >
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    お知らせ
                  </Typography>
                </MenuItem> */}
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217"
                target="_blank"
                sx={{
                  fontWeight: 'bold',
                  borderRadius: '20px', // Adjust the value as needed
                  padding: '20px 20px 20px 20px', // Adjust the values as needed for top/bottom and left/right padding
                }}
              >
                今すぐはじめる
              </Button>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'end',
                  flexGrow: 1,
                }}
              ></Box>
                  <MenuItem component="button" onClick={() => scrollToSection('features')}>
                    スマート雀とは
                  </MenuItem>
                  {/* <MenuItem onClick={() => scrollToSection('howtouse')}>
                    HowToUse
                  </MenuItem> */}
                  <MenuItem component="button" onClick={() => scrollToSection('pricing')}>
                    料金
                  </MenuItem>
                  <MenuItem component="button" onClick={() => scrollToSection('faq')}>
                    よくある質問
                  </MenuItem>
                  {/* <MenuItem onClick={() => scrollToSection('news')}>
                    NEWS
                  </MenuItem> */}
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217"
                      target="_blank"
                      sx={{ width: '100%' }}
                    >
                      今すぐはじめる
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default AppAppBar
