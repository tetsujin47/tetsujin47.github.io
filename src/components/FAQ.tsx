import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import { feltGreen, slateInk } from '../getLPTheme'

const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/1xYx0kpBq9lsxbHJO6IHsgx3rfo6_BOleRS_ODpC38M4/'

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: slateInk[50],
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 5.5 }}>
          <Typography
            variant="overline"
            sx={{
              color: feltGreen[600],
              fontWeight: 700,
              letterSpacing: '0.14em',
              fontSize: '0.78rem',
            }}
          >
            FAQ
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{ mt: 0.75, mb: 1.5, color: slateInk[900] }}
          >
            よくある質問
          </Typography>
          <Typography variant="body1" color="text.secondary">
            使い方やプランに関する質問をまとめています。解決しない場合は、お気軽にお問い合わせください。
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreRoundedIcon sx={{ color: feltGreen[600] }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ px: { xs: 2.5, sm: 3.25 }, py: 1.25 }}
            >
              <Typography
                component="h3"
                variant="subtitle1"
                sx={{ fontWeight: 700, color: slateInk[900] }}
              >
                サブスクリプションの解約方法を教えてください。
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ px: { xs: 2.5, sm: 3.25 }, pb: 3, pt: 0.5 }}
            >
              <Typography variant="body2" color="text.secondary">
                定期購読を解約するには、iOSの設定アプリを開き、「サブスクリプション」をタップしてから、スマート雀のサブスクリプションを選択して解約してください。解約手続きが完了するまで、次回の課金が行われることがあります。詳細については{' '}
                <Link
                  href="https://support.apple.com/ja-jp/118428"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Appleのサポート
                </Link>{' '}
                をご確認ください。
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreRoundedIcon sx={{ color: feltGreen[600] }} />
              }
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{ px: { xs: 2.5, sm: 3.25 }, py: 1.25 }}
            >
              <Typography
                component="h3"
                variant="subtitle1"
                sx={{ fontWeight: 700, color: slateInk[900] }}
              >
                チー・ポン・カンの設定方法が分かりません。
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ px: { xs: 2.5, sm: 3.25 }, pb: 3, pt: 0.5 }}
            >
              <Typography variant="body2" color="text.secondary">
                鳴いた牌と手牌を入力後に鳴きたい牌をタップすることで、鳴きの設定や牌の変更・削除を行うことが可能です。
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
            p: { xs: 3, sm: 4 },
            borderRadius: '22px',
            bgcolor: '#FFFFFF',
            border: `1px solid ${alpha(feltGreen[600], 0.14)}`,
            boxShadow: `0 12px 32px ${alpha(slateInk[900], 0.05)}`,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2.5,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ color: slateInk[900], mb: 0.5, fontSize: '1.1rem' }}
            >
              上記で解決しない場合
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ご不明点や不具合のご報告・機能のご要望は、お問い合わせフォームよりお気軽にご連絡ください。
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MailOutlineRoundedIcon />}
            sx={{
              flexShrink: 0,
              px: 3,
              py: 1.25,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            お問い合わせ
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
