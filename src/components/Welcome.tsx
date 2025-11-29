import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'

// カスタムスタイルを定義
const HighlightedText = styled('span')({
  color: '#0A66C2',
  fontWeight: 700,
})

const Welcome = () => {
  return (
    <>
      <Box
        id="welcome"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(180deg, rgba(3, 51, 99, 0.45) 0%, rgba(3, 51, 99, 0.25) 35%, rgba(0, 0, 0, 0.68) 75%, rgba(0, 0, 0, 0.8) 100%), url(${
            process.env.PUBLIC_URL || ''
          }/titleimg.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'flex-end',
          pb: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="lg" sx={{ pb: { xs: 0, md: 0 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1.25, md: 1.5 },
              maxWidth: 720,
              color: '#fff',
              textShadow: '0 4px 12px rgba(0,0,0,0.45)',
              textAlign: 'left',
              mx: 'auto',
              px: { xs: 2.5, md: 3 },
              py: { xs: 2.5, md: 3 },
              borderRadius: 3,
              backgroundColor: 'rgba(0,0,0,0.2)',
              backdropFilter: 'blur(3px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                lineHeight: 1.3,
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                fontWeight: 800,
              }}
            >
              スマホのカメラで
              <br />
              麻雀点数計算が簡単に
              <br />
              <HighlightedText>スマート雀</HighlightedText>は符計算にも便利
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: 'rgba(255,255,255,0.95)',
              }}
            >
              麻雀点数計算をスマホだけで完結。牌の読み取りからリーチ／鳴き設定、符計算までワンストップでこなす使いやすいアプリです。
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: '#f6f6f6',
          borderTop: '1px solid #e2e2e2',
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 4 },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 1.5, sm: 2.25 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              fontSize: { xs: '1.2rem', sm: '1.3rem' },
            }}
          >
            いますぐ <HighlightedText>スマート雀</HighlightedText> をダウンロード ＞＞
          </Typography>
          <Box
            component="a"
            href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              width: { xs: 140, sm: 180 },
              height: { xs: 45, sm: 52 },
              backgroundImage: `url(${process.env.PUBLIC_URL || ''}/get_from_appstore.jpeg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        </Container>
      </Box>
    </>
  )
}

export default Welcome
