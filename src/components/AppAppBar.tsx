import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { feltGreen, slateInk } from '../getLPTheme'

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217'

const navItems = [
  { label: '特徴', id: 'features' },
  { label: '使い方', id: 'howtouse' },
  { label: '料金プラン', id: 'pricing' },
  { label: 'よくある質問', id: 'faq' },
]

export default function AppAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 84
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        py: { xs: 1, md: 1.25 },
        transition: 'background-color 200ms ease, box-shadow 200ms ease',
        bgcolor: scrolled ? alpha('#FFFFFF', 0.9) : alpha('#F7F8F5', 0.72),
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid',
        borderColor: scrolled
          ? alpha(feltGreen[600], 0.14)
          : alpha(feltGreen[600], 0.06),
        boxShadow: scrolled
          ? `0 6px 24px ${alpha(slateInk[900], 0.06)}`
          : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 52, md: 58 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box
            component="button"
            type="button"
            onClick={() => scrollToSection('welcome')}
            aria-label="スマート雀 トップへ戻る"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.25,
              border: 0,
              p: 0.5,
              bgcolor: 'transparent',
              cursor: 'pointer',
              color: 'text.primary',
            }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL || ''}/favicon.ico`}
              alt=""
              sx={{
                width: 34,
                height: 34,
                borderRadius: '10px',
                boxShadow: `0 2px 8px ${alpha(slateInk[900], 0.14)}`,
              }}
            />
            <Box sx={{ textAlign: 'left', lineHeight: 1.1 }}>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '0.02em',
                  color: feltGreen[700],
                }}
              >
                スマート雀
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'text.secondary',
                }}
              >
                SMART MAHJONG
              </Typography>
            </Box>
          </Box>

          <Box
            component="nav"
            aria-label="メインナビゲーション"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  px: 2,
                  py: 1,
                  '&:hover': {
                    color: feltGreen[600],
                    bgcolor: alpha(feltGreen[600], 0.06),
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              component="a"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
              sx={{
                px: 2.5,
                py: 1,
                fontSize: '0.9rem',
              }}
            >
              App Storeで入手
            </Button>
          </Box>

          <IconButton
            aria-label="メニューを開く"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: feltGreen[700],
              border: `1px solid ${alpha(feltGreen[600], 0.18)}`,
              borderRadius: '12px',
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 'min(82vw, 320px)',
            bgcolor: '#FFFFFF',
            p: 2.5,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1.5,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 800, color: feltGreen[700] }}
          >
            スマート雀
          </Typography>
          <IconButton
            aria-label="メニューを閉じる"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1.5 }} />
        <List disablePadding>
          {navItems.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                '&:hover': { bgcolor: feltGreen[50] },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: '0.98rem',
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          component="a"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
          sx={{ py: 1.3 }}
        >
          App Storeでダウンロード
        </Button>
      </Drawer>
    </AppBar>
  )
}
