import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'

const tiers = [
  {
    title: 'スタンダード',
    price: '0',
    description: [
      'カメラで麻雀牌自動読み取り',
      '詳細な点数計算設定',
      '符計算結果表示',
      '3人／4人麻雀に対応',
    ],
    cta: '無料で使う',
    highlighted: false,
  },
  {
    title: 'プレミアム',
    subheader: 'おすすめ',
    price: '100',
    description: [
      'カメラで麻雀牌自動読み取り',
      '詳細な点数計算設定',
      '符計算結果表示',
      '3人／4人麻雀に対応',
      '広告非表示機能',
    ],
    cta: '広告なしで使う',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <Container
      fixed
      id="pricing"
      sx={{
        pt: { xs: 6, sm: 12 },
        pb: { xs: 6, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box sx={{ textAlign: 'left' }}>
        <Chip
          label="選べる2つのプラン"
          sx={{
            mb: 2,
            fontWeight: 700,
            bgcolor: 'rgba(10, 102, 194, 0.08)',
          }}
        />
        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.8rem', sm: '2rem' },
            textAlign: 'left',
            px: { xs: 0.5, sm: 2 },
            mb: 0.5,
          }}
        >
          料金プラン
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'left',
            px: { xs: 0.5, sm: 2 },
            pb: 1.75,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
          }}
        >
          無料のスタンダードから始め、広告なしで集中したいときはプレミアムへ。使い方に合わせてお選びください。
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
            sx={{
              '@media (max-width: 600px)': {
                mx: '12px',
              },
            }}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                height: '100%',
                border: tier.highlighted ? '1px solid' : undefined,
                borderColor: tier.highlighted ? 'primary.main' : undefined,
                background: tier.highlighted
                  ? 'linear-gradient(#033363, #021F3B)'
                  : undefined,
                color: tier.highlighted ? 'grey.100' : 'inherit',
                position: 'relative',
              }}
            >
              <CardContent sx={{ pb: 0, flexGrow: 1 }}>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.subheader && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{
                        backgroundColor: tier.highlighted
                          ? 'primary.contrastText'
                          : 'primary.50',
                        '& .MuiChip-label': {
                          color: tier.highlighted ? 'primary.dark' : 'primary.main',
                        },
                        '& .MuiChip-icon': {
                          color: tier.highlighted ? 'primary.dark' : 'primary.main',
                        },
                      }}
                    />
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  {tier.price === '0' ? (
                    <Typography
                      component="h3"
                      variant="h6"
                      sx={{
                        '@media (max-width: 600px)': {
                          fontSize: '16px',
                        },
                      }}
                    >
                      月額無料
                    </Typography>
                  ) : (
                    <>
                      <Typography
                        component="h3"
                        variant="h6"
                        sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '16px',
                          },
                          color: tier.highlighted ? 'grey.100' : undefined,
                        }}
                      >
                        月額&nbsp;
                      </Typography>
                      <Typography
                        component="h3"
                        variant="h2"
                        sx={{
                          '@media (max-width: 600px)': {
                            fontSize: '24px',
                          },
                          color: tier.highlighted ? 'grey.50' : undefined,
                        }}
                      >
                        {tier.price}円
                      </Typography>
                    </>
                  )}
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: tier.highlighted ? 0.35 : 0.2,
                    borderColor: tier.highlighted ? 'grey.200' : 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        width: 20,
                        color: tier.highlighted ? 'primary.light' : 'primary.main',
                      }}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{
                        color: tier.highlighted ? 'grey.200' : undefined,
                        fontWeight: line === '広告非表示機能' ? '900' : 'normal',
                        fontSize:
                          line === '広告非表示機能'
                            ? { xs: '20px', sm: '1.3rem' }
                            : { xs: '14px', sm: '1rem' },
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <Box sx={{ px: 2, pb: 3 }}>
                <Button
                  fullWidth
                  color="primary"
                  variant={tier.highlighted ? 'outlined' : 'contained'}
                  component="a"
                  href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E9%9B%80/id1621669217"
                  target="_blank"
                  sx={{
                    fontWeight: 700,
                    color: tier.highlighted ? 'grey.100' : undefined,
                    borderColor: tier.highlighted ? 'rgba(255,255,255,0.5)' : undefined,
                    backgroundColor: tier.highlighted
                      ? 'rgba(255,255,255,0.08)'
                      : undefined,
                  }}
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
          mt: 2,
          px: { xs: 2, sm: 3 },
          py: 2,
          borderRadius: 2,
          bgcolor: 'rgba(10, 102, 194, 0.06)',
          border: '1px solid rgba(10, 102, 194, 0.1)',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          プレミアムでは広告が非表示になり、計算画面に集中できます。まずはスタンダードで体験し、必要に応じてアップグレードしてください。
        </Typography>
      </Box>
    </Container>
  )
}
