import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { appCyan, feltGreen, slateInk } from '../getLPTheme'

const imageBase = process.env.PUBLIC_URL || ''

const strengths = [
  {
    icon: CameraAltRoundedIcon,
    title: 'カメラで牌を瞬時に自動認識',
    description:
      '手牌にスマホをかざすだけで牌を自動で読み取り。手入力の手間を減らし、対局の流れを止めずに点数を確認できます。',
  },
  {
    icon: MenuBookRoundedIcon,
    title: '役名・飜・符の詳細をひと目で',
    description:
      '点数だけでなく、成立した役の内訳や基本符・ツモ符・暗刻符などの符計算詳細まで表示。点数計算の学習にも最適です。',
  },
  {
    icon: GroupsRoundedIcon,
    title: '3人・4人麻雀対応のシンプルUI',
    description:
      '場風・自風・ロン/ツモ・リーチ・鳴き・ドラ数を直感的にタップ操作。実戦中でも迷わず使える横画面設計です。',
  },
]

const steps = [
  {
    id: 'step-1',
    number: '01',
    label: 'STEP 1',
    title: 'カメラを起動する',
    shortDesc: '右下のカメラアイコンをタップして撮影画面へ。',
    description:
      'アプリを開いたら、画面右下のシアン色のカメラアイコンをタップします。場風・自風や本場数などの条件は、撮影の前後どちらでも簡単に切り替えられます。',
    highlightTitle: '迷わないワン画面レイアウト',
    highlightBody:
      '左に点数・詳細、中央に手動設定、下部に手牌を配置。対局中でも必要な項目へすぐにアクセスできます。',
    image: `${imageBase}/STEP1.jpeg`,
    imageAlt: 'スマート雀のメイン画面とカメラ起動ボタン',
  },
  {
    id: 'step-2',
    number: '02',
    label: 'STEP 2',
    title: 'あがり牌をカメラで読み取る',
    shortDesc: 'ガイド枠に牌を合わせるだけで自動反映。',
    description:
      'カメラ画面のガイド枠にあがり牌を収めると、萬子・筒子・索子・字牌を自動で認識して手牌に反映します。読み取り後の微調整や追加・削除もタップでスムーズです。',
    highlightTitle: 'ガイド枠でスピーディに認識',
    highlightBody:
      '牌の並びをそのまま写すだけ。認識された牌は画面上でリアルタイムに確認できます。',
    image: `${imageBase}/STEP2.jpeg`,
    imageAlt: 'カメラのガイド枠で麻雀牌を読み取っている画面',
  },
  {
    id: 'step-3',
    number: '03',
    label: 'STEP 3',
    title: '役や鳴きを設定して点数を表示',
    shortDesc: '点数・飜・符の内訳まで瞬時に算出。',
    description:
      'リーチやチー・ポン・カン、ドラ数を設定すると、点数・支払い（ALL/子親）・飜・符が即座に表示されます。役詳細と符詳細の内訳も確認できるため、答え合わせや学習にも便利です。',
    highlightTitle: '符計算の内訳までしっかり表示',
    highlightBody:
      '例：7700点（2600点 ALL）／ 3飜 40(38)符。役牌・ドラ・基本符・ツモ・么九牌暗刻まで一目で把握できます。',
    image: `${imageBase}/STEP3.jpeg`,
    imageAlt: '7700点・3飜40符と役詳細・符詳細が表示された計算結果画面',
  },
]

export default function Features() {
  const [activeStep, setActiveStep] = React.useState(0)
  const currentStep = steps[activeStep]

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <Box
        component="section"
        id="features"
        sx={{
          py: { xs: 8, md: 11 },
          bgcolor: '#FFFFFF',
          borderTop: `1px solid ${alpha(feltGreen[600], 0.08)}`,
          borderBottom: `1px solid ${alpha(feltGreen[600], 0.08)}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 680, mb: { xs: 5, md: 6.5 } }}>
            <Typography
              variant="overline"
              sx={{
                color: feltGreen[600],
                fontWeight: 700,
                letterSpacing: '0.14em',
                fontSize: '0.78rem',
              }}
            >
              FEATURES
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              sx={{ mt: 0.75, mb: 1.75, color: slateInk[900] }}
            >
              スマート雀とは？
            </Typography>
            <Typography variant="body1" color="text.secondary">
              実戦のスピード感を損なわず、正確な点数計算と符計算の理解をサポートするために設計された麻雀点数計算アプリです。
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <Grid item xs={12} md={4} key={item.title}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      bgcolor: slateInk[50],
                      border: `1px solid ${alpha(feltGreen[600], 0.12)}`,
                      boxShadow: 'none',
                      transition:
                        'transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        borderColor: alpha(feltGreen[600], 0.3),
                        boxShadow: `0 16px 36px ${alpha(slateInk[900], 0.07)}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          bgcolor: feltGreen[600],
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                        }}
                      >
                        <Icon sx={{ fontSize: 24 }} />
                      </Box>
                      <Typography
                        component="h3"
                        variant="h4"
                        sx={{ mb: 1.25, color: slateInk[900] }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="howtouse"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: slateInk[100],
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: 2,
              mb: { xs: 4.5, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 640 }}>
              <Typography
                variant="overline"
                sx={{
                  color: feltGreen[600],
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  fontSize: '0.78rem',
                }}
              >
                HOW TO USE
              </Typography>
              <Typography
                component="h2"
                variant="h2"
                sx={{ mt: 0.75, mb: 1.25, color: slateInk[900] }}
              >
                使い方はシンプルな3ステップ
              </Typography>
              <Typography variant="body1" color="text.secondary">
                ステップを切り替えて、実際のアプリ画面と操作の流れをご確認ください。
              </Typography>
            </Box>

            <Stack direction="row" spacing={1}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handlePrev}
                startIcon={<ArrowBackRoundedIcon />}
                aria-label="前のステップへ"
                sx={{ bgcolor: '#FFFFFF' }}
              >
                前へ
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleNext}
                endIcon={<ArrowForwardRoundedIcon />}
                aria-label="次のステップへ"
              >
                次へ
              </Button>
            </Stack>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            <Grid item xs={12} md={4}>
              <Stack
                spacing={1.5}
                role="tablist"
                aria-label="使い方のステップ一覧"
              >
                {steps.map((step, index) => {
                  const isActive = index === activeStep
                  return (
                    <Box
                      key={step.id}
                      component="button"
                      type="button"
                      role="tab"
                      id={`tab-${step.id}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${step.id}`}
                      onClick={() => setActiveStep(index)}
                      sx={{
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        p: 2.5,
                        borderRadius: '18px',
                        border: '1.5px solid',
                        borderColor: isActive
                          ? feltGreen[600]
                          : alpha(feltGreen[600], 0.12),
                        bgcolor: isActive ? '#FFFFFF' : alpha('#FFFFFF', 0.65),
                        boxShadow: isActive
                          ? `0 14px 32px ${alpha(feltGreen[600], 0.12)}`
                          : 'none',
                        transition: 'all 180ms ease',
                        '&:hover': {
                          bgcolor: '#FFFFFF',
                          borderColor: isActive
                            ? feltGreen[600]
                            : alpha(feltGreen[600], 0.35),
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          mb: 0.75,
                        }}
                      >
                        <Box
                          sx={{
                            width: 32,
                            height: 32,
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 800,
                            fontSize: '0.82rem',
                            bgcolor: isActive ? feltGreen[600] : feltGreen[50],
                            color: isActive ? '#FFFFFF' : feltGreen[700],
                            flexShrink: 0,
                          }}
                        >
                          {step.number}
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            letterSpacing: '0.1em',
                            color: isActive ? appCyan[600] : slateInk[500],
                          }}
                        >
                          {step.label}
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 800,
                          fontSize: '1.05rem',
                          color: slateInk[900],
                          mb: 0.5,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.88rem' }}
                      >
                        {step.shortDesc}
                      </Typography>
                    </Box>
                  )
                })}
              </Stack>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                role="tabpanel"
                id={`panel-${currentStep.id}`}
                aria-labelledby={`tab-${currentStep.id}`}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: { xs: 2.25, sm: 3.5 },
                  borderRadius: '24px',
                  bgcolor: '#FFFFFF',
                  border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
                  boxShadow: `0 20px 48px ${alpha(slateInk[900], 0.08)}`,
                }}
              >
                <Box
                  sx={{
                    p: { xs: 1, sm: 1.5 },
                    borderRadius: '22px',
                    bgcolor: '#111615',
                    boxShadow: `inset 0 0 0 1px ${alpha('#FFFFFF', 0.12)}`,
                    mb: 3,
                  }}
                >
                  <Box
                    component="img"
                    src={currentStep.image}
                    alt={currentStep.imageAlt}
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16 / 9',
                      objectFit: 'contain',
                      borderRadius: '14px',
                      bgcolor: '#0B0E0E',
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: appCyan[600],
                      mb: 0.5,
                    }}
                  >
                    {currentStep.label}
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{ color: slateInk[900], mb: 1.25 }}
                  >
                    {currentStep.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2.25 }}
                  >
                    {currentStep.description}
                  </Typography>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '14px',
                      bgcolor: feltGreen[50],
                      border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 800,
                        color: feltGreen[700],
                        mb: 0.35,
                      }}
                    >
                      {currentStep.highlightTitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: slateInk[700], fontSize: '0.88rem' }}
                    >
                      {currentStep.highlightBody}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
