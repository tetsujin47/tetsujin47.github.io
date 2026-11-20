import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { appCyan, feltGreen, slateInk } from '../getLPTheme'

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217'

const keyPoints = [
  '基本機能は無料で利用可能',
  '3人・4人麻雀の両方に対応',
  '役名・飜・符の内訳まで表示',
]

export default function Welcome() {
  const scrollToHowToUse = () => {
    const element = document.getElementById('howtouse')
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 84
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="section"
      id="welcome"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 13, sm: 15, md: 17 },
        pb: { xs: 8, sm: 10, md: 12 },
        background: `radial-gradient(circle at 85% 20%, ${alpha(
          feltGreen[200],
          0.35,
        )} 0%, transparent 48%), radial-gradient(circle at 12% 85%, ${alpha(
          appCyan[200],
          0.2,
        )} 0%, transparent 45%), ${slateInk[50]}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                display: 'inline-block',
                color: feltGreen[600],
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: '0.78rem',
                mb: 1.5,
              }}
            >
              iOS 麻雀点数・符計算アプリ
            </Typography>

            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: slateInk[900],
                mb: 2.5,
              }}
            >
              スマホをかざすだけ。
              <Box component="br" />
              麻雀の
              <Box component="span" sx={{ color: feltGreen[600] }}>
                点数・符計算
              </Box>
              を一瞬で。
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{
                mb: 3.5,
                maxWidth: 520,
              }}
            >
              スマート雀は、カメラで麻雀牌を自動読み取りし、リーチや鳴きの設定から点数・飜・符の計算までスマホひとつで完結するアプリです。符の内訳も詳しく表示されるため、点数計算の学習にも役立ちます。
            </Typography>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'stretch', sm: 'center' }}
              sx={{ mb: 3.5 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                component="a"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  px: 3.25,
                  py: 1.5,
                  fontSize: '1rem',
                }}
              >
                App Storeで無料ダウンロード
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={scrollToHowToUse}
                endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{
                  px: 2.75,
                  py: 1.5,
                  fontSize: '0.96rem',
                }}
              >
                3ステップを見る
              </Button>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2.5 }}
              flexWrap="wrap"
              useFlexGap
            >
              {keyPoints.map((point) => (
                <Box
                  key={point}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    color: slateInk[700],
                  }}
                >
                  <CheckCircleOutlineRoundedIcon
                    sx={{ fontSize: 18, color: feltGreen[500] }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, fontSize: '0.88rem' }}
                  >
                    {point}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                maxWidth: 560,
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: '28px',
                  bgcolor: '#FFFFFF',
                  border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
                  boxShadow: `0 24px 60px ${alpha(slateInk[900], 0.12)}`,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    bgcolor: slateInk[900],
                  }}
                >
                  <Box
                    component="img"
                    src={`${process.env.PUBLIC_URL || ''}/titleimg.jpeg`}
                    alt="スマート雀で麻雀牌をカメラ読み取りする様子"
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16 / 10',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mt: 1.5,
                    px: { xs: 2, sm: 2.5 },
                    py: { xs: 1.75, sm: 2 },
                    borderRadius: '18px',
                    bgcolor: '#121817',
                    color: '#FFFFFF',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1.5,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.72rem',
                        color: alpha('#FFFFFF', 0.68),
                        letterSpacing: '0.08em',
                        fontWeight: 600,
                      }}
                    >
                      計算結果プレビュー
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 1.25,
                        mt: 0.25,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: '1.45rem', sm: '1.75rem' },
                          fontWeight: 800,
                          color: appCyan[400],
                          lineHeight: 1.1,
                        }}
                      >
                        7700点
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          color: appCyan[200],
                        }}
                      >
                        2600点 ALL
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                    <Typography
                      sx={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                      }}
                    >
                      3飜 40(38)符
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.78rem',
                        color: alpha('#FFFFFF', 0.74),
                      }}
                    >
                      役牌 發・ドラ2 ／ 符詳細を自動表示
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
