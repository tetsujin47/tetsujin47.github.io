import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '@mui/material'

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Container
      fixed
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 4, sm: 12 },
        // position: 'relative',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // gap: { xs: 3, sm: 6 },
      }}
    >
      <Chip
        label="FAQ"
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
          paddingRight: '16px',
          paddingBottom: '8px',
          paddingLeft: '16px',
        }}
      >
        スマート雀に関するよくある質問
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          textAlign: 'left',
          backgroundRepeat: 'no-repeat',
          paddingRight: '16px',
          paddingBottom: '24px',
          paddingLeft: '16px',
          lineHeight: 1.7,
          '@media (max-width: 600px)': {
            fontSize: '12px',
          },
        }}
      >
        使い方やプランに関する質問をまとめています。解決しない場合は、お気軽にお問い合わせください。
      </Typography>
      <Box sx={{ width: '100%', paddingBottom: '24px' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{
                '@media (max-width: 600px)': {
                  fontSize: '12px',
                }, // 文字サイズを大きくする
              }}
            >
              サブスクリプションの解約方法を教えてください。
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: { sm: '100%', md: '70%' },
                '@media (max-width: 600px)': {
                  fontSize: '12px',
                }, // 文字サイズを大きくする
              }}
            >
              定期購読を解約するには、iOSの設定アプリを開き、[サブスクリプション]をタップしてから、このアプリのサブスクリプションを選択して解約してください。解約手続きが完了するまで、次回の課金が行われることがあります。詳細については
              <Link
                href="https://support.apple.com/ja-jp/118428"
                target="_blank"
                rel="noopener noreferrer"
              >
                Appleのサポート
              </Link>
              をご確認ください。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography
              component="h3"
              variant="subtitle2"
              sx={{
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                  }, // 文字サイズを大きくする
              }}
            >
              チーポンカンの設定方法が分からない。
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{
                maxWidth: { sm: '100%', md: '70%' },
                fontSize: {
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                  }, // 文字サイズを大きくする
                },
              }}
            >
              鳴いた牌と手牌を入力後に鳴きたい牌をタップすることで、鳴いたり、牌の変更や削除を行うことが可能です。
              <br />
              チーをする場合は最も小さい牌を選択すると、チーを設定することができます。
              <br />
              また、喰い下がりは自動で計算に含まれる仕様としております。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          width: '100%',
          paddingBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, rgba(10, 102, 194, 0.08), rgba(10, 102, 194, 0.02))',
          margin: '24px 0',
          borderRadius: '16px',
          border: '1px solid rgba(10,102,194,0.15)',
          boxShadow: '0 12px 24px rgba(10,102,194,0.06)',
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          sx={{ maxWidth: { sm: '100%', md: '70%', paddingTop: '16px' } }}
        >
          上記で解決しない場合
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component="a"
          href="https://docs.google.com/forms/d/1xYx0kpBq9lsxbHJO6IHsgx3rfo6_BOleRS_ODpC38M4/"
          target="_blank"
          sx={{ width: '60%', maxWidth: '400px', borderRadius: '999px' }}
        >
          お問合せ
        </Button>
      </Box>
    </Container>
  )
}
