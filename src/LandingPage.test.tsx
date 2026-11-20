import { fireEvent, render, screen } from '@testing-library/react'
import LandingPage from './LandingPage'

describe('LandingPage', () => {
  test('主要な見出しとセクションが描画される', () => {
    render(<LandingPage />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent('点数・符計算')

    expect(
      screen.getByRole('heading', { name: 'スマート雀とは？' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '使い方はシンプルな3ステップ' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '料金プラン' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'よくある質問' }),
    ).toBeInTheDocument()
  })

  test('3ステップビューアーでステップを切り替えられる', () => {
    render(<LandingPage />)

    const step1Tab = screen.getByRole('tab', { name: /STEP 1/ })
    const step2Tab = screen.getByRole('tab', { name: /STEP 2/ })
    const step3Tab = screen.getByRole('tab', { name: /STEP 3/ })

    expect(step1Tab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getByAltText('スマート雀のメイン画面とカメラ起動ボタン'),
    ).toBeInTheDocument()

    fireEvent.click(step2Tab)
    expect(step2Tab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getByAltText('カメラのガイド枠で麻雀牌を読み取っている画面'),
    ).toBeInTheDocument()

    fireEvent.click(step3Tab)
    expect(step3Tab).toHaveAttribute('aria-selected', 'true')
    expect(
      screen.getByAltText(
        '7700点・3飜40符と役詳細・符詳細が表示された計算結果画面',
      ),
    ).toBeInTheDocument()
  })

  test('FAQのアコーディオン開閉と主要外部リンクが機能する', () => {
    render(<LandingPage />)

    const secondFaqButton = screen.getByRole('button', {
      name: 'チー・ポン・カンの設定方法が分かりません。',
    })
    fireEvent.click(secondFaqButton)
    expect(
      screen.getByText(/喰い下がりは自動で計算に含まれる仕様/),
    ).toBeVisible()

    const appStoreLinks = screen.getAllByRole('link', { name: /App Store/i })
    expect(appStoreLinks.length).toBeGreaterThanOrEqual(2)
    expect(appStoreLinks[0]).toHaveAttribute(
      'href',
      expect.stringContaining('apps.apple.com/jp/app/'),
    )

    expect(screen.getByRole('link', { name: 'お問い合わせ' })).toHaveAttribute(
      'href',
      expect.stringContaining('docs.google.com/forms/'),
    )
    expect(screen.getByRole('link', { name: '利用規約' })).toHaveAttribute(
      'href',
      expect.stringContaining('terms_and_conditions.html'),
    )
    expect(
      screen.getByRole('link', { name: 'プライバシーポリシー' }),
    ).toHaveAttribute('href', expect.stringContaining('privacy_policy.html'))
  })
})
