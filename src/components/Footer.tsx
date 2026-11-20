import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { appCyan, feltGreen } from '../getLPTheme'

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217'
const TERMS_URL =
  'https://kazukimu.github.io/MahjongPointToolUsage/terms_and_conditions.html'
const PRIVACY_URL =
  'https://kazukimu.github.io/MahjongPointToolUsage/privacy_policy.html'

const navLinks = [
  { label: '特徴', id: 'features' },
  { label: '使い方', id: 'howtouse' },
  { label: '料金プラン', id: 'pricing' },
  { label: 'よくある質問', id: 'faq' },
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 84
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: feltGreen[800],
        color: '#FFFFFF',
        pt: { xs: 6, md: 8 },
        pb: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 4,
            mb: 4,
          }}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                mb: 1.25,
              }}
            >
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL || ''}/favicon.ico`}
                alt=""
                sx={{ width: 32, height: 32, borderRadius: '8px' }}
              />
              <Typography
                variant="h4"
                sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.15rem' }}
              >
                スマート雀
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: alpha('#FFFFFF', 0.74), fontSize: '0.88rem' }}
            >
              スマホのカメラで麻雀牌を自動読み取りし、点数・飜・符をわかりやすく計算できる
              iOS アプリ。
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={{ xs: 2, sm: 3 }}
            flexWrap="wrap"
            useFlexGap
          >
            {navLinks.map((item) => (
              <Link
                key={item.id}
                component="button"
                type="button"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: alpha('#FFFFFF', 0.85),
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  '&:hover': { color: appCyan[300] },
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: appCyan[300],
                fontSize: '0.9rem',
                fontWeight: 700,
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              App Store
            </Link>
          </Stack>
        </Box>

        <Divider sx={{ borderColor: alpha('#FFFFFF', 0.14), mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1.5,
          }}
        >
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Link
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: alpha('#FFFFFF', 0.75),
                fontSize: '0.84rem',
                fontWeight: 500,
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              利用規約
            </Link>
            <Link
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: alpha('#FFFFFF', 0.75),
                fontSize: '0.84rem',
                fontWeight: 500,
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              プライバシーポリシー
            </Link>
          </Stack>

          <Typography
            variant="body2"
            sx={{ color: alpha('#FFFFFF', 0.62), fontSize: '0.82rem' }}
          >
            © {new Date().getFullYear()} furuya shodai and kimura kazuya
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
