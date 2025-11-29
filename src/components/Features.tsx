import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import { styled } from '@mui/system'

const HighlightedText = styled('span')({
  color: '#0A66C2',
  fontWeight: 800,
})

const imageBase = process.env.PUBLIC_URL || ''

const steps = [
  {
    label: 'STEP 1',
    title: 'カメラを起動',
    description: '「カメラ」アイコンをタップして\n撮影画面を開きます。',
    image: `${imageBase}/STEP1.jpeg`,
  },
  {
    label: 'STEP 2',
    title: '牌を読み取る',
    description: 'あがり牌をカメラで読み込むと\n牌情報が自動で反映されます。',
    image: `${imageBase}/STEP2.jpeg`,
  },
  {
    label: 'STEP 3',
    title: '役を設定して計算',
    description:
      'リーチやチー・ポン・カンなどを設定\n点数・飜・符をすぐ表示します。',
    image: `${imageBase}/STEP3.jpeg`,
  },
]

const highlights = [
  '点数と一緒に飜／符を表示し、学習にも最適',
  '3人／4人麻雀どちらでも利用可能',
  'シンプルなUIで実戦中でも迷わない操作性',
]

const Features = () => {
  return (
    <Container
      fixed
      id="features"
      sx={{
        pt: { xs: 3.5, sm: 9 },
        pb: { xs: 5.5, sm: 10 },
      }}
    >
      <Box sx={{ textAlign: 'left', mb: { xs: 3, sm: 4 } }}>
        <Chip
          label="使い方はシンプルな3ステップ"
          color="default"
          sx={{ mb: 1.5, fontWeight: 700, bgcolor: 'rgba(10,102,194,0.08)' }}
        />
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 0.5, fontSize: { xs: '1.8rem', md: '2rem' } }}
        >
          <HighlightedText>スマート雀</HighlightedText>とは？
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1, lineHeight: 1.8, letterSpacing: '0.01em' }}
        >
          スマート雀はカメラで牌を瞬時に読み取り、簡単な操作で麻雀点数計算できるアプリです。 また、点数計算結果とともに役名や飜・符が表示され計算の学習に役立てることができます。
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1.25 }}>
          {highlights.map((item) => (
            <Box
              key={item}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'text.primary',
              }}
            >
              <CheckCircleRoundedIcon
                sx={{ color: 'primary.main', fontSize: 22, flexShrink: 0 }}
              />
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {item}
              </Typography>
            </Box>
            ))}
        </Box>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 2.75, md: 4.5 },
          borderRadius: 4,
          background:
            'linear-gradient(135deg, rgba(10, 102, 194, 0.06) 0%, rgba(255, 255, 255, 0.9) 70%)',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="stretch"
          >
            {steps.map((step) => (
              <Grid item xs={12} sm={6} md={4} key={step.label}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.25,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(10,102,194,0.12)',
                    boxShadow: '0 12px 24px rgba(10,102,194,0.08)',
                    width: '100%',
                    mx: 'auto',
                  }}
                  component="article"
                >
                  <Typography
                    variant="overline"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: 'primary.main',
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Box
                    component="img"
                    src={step.image}
                    alt={`${step.label} image`}
                    sx={{
                      width: { xs: '90%', sm: '80%' },
                      maxWidth: 320,
                      height: 'auto',
                      borderRadius: 2,
                      objectFit: 'contain',
                      mb: 1.5,
                      border: '1px solid rgba(10,102,194,0.1)',
                      mx: 'auto',
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {step.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  )
}

export default Features
