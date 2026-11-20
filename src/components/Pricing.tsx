import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import { appCyan, feltGreen, slateInk } from '../getLPTheme'

const APP_STORE_URL =
  'https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217'

const tiers = [
  {
    title: 'スタンダード',
    badge: null,
    priceLabel: '月額無料',
    priceAmount: '0',
    subtitle: 'まずは気軽に始めたい方に',
    features: [
      { text: 'カメラで麻雀牌自動読み取り', highlight: false },
      { text: '詳細な点数計算設定（リーチ・鳴き・ドラ等）', highlight: false },
      { text: '役名・飜・符計算結果の詳細表示', highlight: false },
      { text: '3人／4人麻雀に対応', highlight: false },
    ],
    cta: '無料で使いはじめる',
    highlighted: false,
  },
  {
    title: 'プレミアム',
    badge: 'おすすめ',
    priceLabel: '月額',
    priceAmount: '100',
    subtitle: '広告なしで対局・学習に集中したい方に',
    features: [
      { text: 'カメラで麻雀牌自動読み取り', highlight: false },
      { text: '詳細な点数計算設定（リーチ・鳴き・ドラ等）', highlight: false },
      { text: '役名・飜・符計算結果の詳細表示', highlight: false },
      { text: '3人／4人麻雀に対応', highlight: false },
      { text: '広告非表示機能で快適に操作', highlight: true },
    ],
    cta: '広告なしで使う',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <Box
      component="section"
      id="pricing"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FFFFFF',
        borderTop: `1px solid ${alpha(feltGreen[600], 0.08)}`,
        borderBottom: `1px solid ${alpha(feltGreen[600], 0.08)}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: feltGreen[600],
              fontWeight: 700,
              letterSpacing: '0.14em',
              fontSize: '0.78rem',
            }}
          >
            PRICING
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{ mt: 0.75, mb: 1.5, color: slateInk[900] }}
          >
            料金プラン
          </Typography>
          <Typography variant="body1" color="text.secondary">
            無料のスタンダードから始めて、広告なしで集中したいときはプレミアムへ。使い方に合わせていつでも選べます。
          </Typography>
        </Box>

        <Grid
          container
          spacing={3.5}
          alignItems="stretch"
          justifyContent="center"
          sx={{ maxWidth: 880, mx: 'auto' }}
        >
          {tiers.map((tier) => (
            <Grid item xs={12} sm={6} key={tier.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: { xs: 1, sm: 1.5 },
                  background: tier.highlighted
                    ? `linear-gradient(155deg, ${feltGreen[600]} 0%, ${feltGreen[800]} 100%)`
                    : slateInk[50],
                  color: tier.highlighted ? '#FFFFFF' : slateInk[900],
                  border: tier.highlighted
                    ? `1.5px solid ${feltGreen[500]}`
                    : `1px solid ${alpha(feltGreen[600], 0.14)}`,
                  boxShadow: tier.highlighted
                    ? `0 22px 48px ${alpha(feltGreen[800], 0.26)}`
                    : `0 10px 28px ${alpha(slateInk[900], 0.05)}`,
                }}
              >
                <CardContent sx={{ p: { xs: 2.5, sm: 3 }, pb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Typography
                      component="h3"
                      variant="h3"
                      sx={{
                        color: tier.highlighted ? '#FFFFFF' : slateInk[900],
                      }}
                    >
                      {tier.title}
                    </Typography>
                    {tier.badge && (
                      <Chip
                        label={tier.badge}
                        size="small"
                        sx={{
                          bgcolor: appCyan[400],
                          color: slateInk[900],
                          fontWeight: 800,
                          fontSize: '0.75rem',
                        }}
                      />
                    )}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: tier.highlighted
                        ? alpha('#FFFFFF', 0.8)
                        : 'text.secondary',
                      mb: 2.5,
                    }}
                  >
                    {tier.subtitle}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 0.75,
                      mb: 2.5,
                    }}
                  >
                    {tier.priceAmount === '0' ? (
                      <>
                        <Typography
                          sx={{
                            fontSize: '2.4rem',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: slateInk[900],
                          }}
                        >
                          ¥0
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 700, color: slateInk[600] }}
                        >
                          / 月額無料
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          sx={{
                            fontSize: '2.4rem',
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: '#FFFFFF',
                          }}
                        >
                          ¥{tier.priceAmount}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: alpha('#FFFFFF', 0.82),
                          }}
                        >
                          / {tier.priceLabel}（税込）
                        </Typography>
                      </>
                    )}
                  </Box>

                  <Divider
                    sx={{
                      my: 2.5,
                      borderColor: tier.highlighted
                        ? alpha('#FFFFFF', 0.18)
                        : alpha(feltGreen[600], 0.12),
                    }}
                  />

                  <Stack spacing={1.5}>
                    {tier.features.map((feature) => (
                      <Box
                        key={feature.text}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.25,
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            fontSize: 20,
                            flexShrink: 0,
                            color: tier.highlighted
                              ? appCyan[400]
                              : feltGreen[500],
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: feature.highlight ? 800 : 500,
                            color: feature.highlight
                              ? appCyan[200]
                              : tier.highlighted
                                ? alpha('#FFFFFF', 0.92)
                                : slateInk[800],
                          }}
                        >
                          {feature.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>

                <Box sx={{ px: { xs: 2.5, sm: 3 }, pb: 3, pt: 1 }}>
                  <Button
                    fullWidth
                    size="large"
                    variant={tier.highlighted ? 'contained' : 'outlined'}
                    component="a"
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={
                      tier.highlighted
                        ? {
                            py: 1.35,
                            bgcolor: '#FFFFFF',
                            color: feltGreen[700],
                            '&:hover': {
                              bgcolor: feltGreen[50],
                              transform: 'translateY(-1px)',
                            },
                          }
                        : {
                            py: 1.35,
                            bgcolor: '#FFFFFF',
                          }
                    }
                  >
                    {tier.cta}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            maxWidth: 880,
            mx: 'auto',
            mt: 4,
            px: { xs: 2.5, sm: 3.5 },
            py: 2.25,
            borderRadius: '16px',
            bgcolor: feltGreen[50],
            border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
            textAlign: { xs: 'left', sm: 'center' },
          }}
        >
          <Typography variant="body2" sx={{ color: slateInk[700] }}>
            プレミアムはアプリ内からいつでもアップグレード・解約が可能です。まずは無料のスタンダードで使い勝手をお試しください。
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
