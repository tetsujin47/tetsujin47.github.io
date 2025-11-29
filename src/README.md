# 開発とデプロイの手順

## セットアップと開発
- 依存インストール: `npm install`（初回のみ）
- 開発サーバー起動: `npm start`（http://localhost:3000）
- テスト: `npm test`

## GitHub Pages デプロイ（gh-pages）
1. ビルド: `npm run build`
2. デプロイ: `npm run deploy`  
   - `gh-pages` パッケージ経由で `gh-pages` ブランチに公開用ファイルをプッシュします。
3. 本体ブランチも更新: `git push origin main`（またはデフォルトブランチ名）
4. 変更をコミットする場合: `git add . && git commit -m "Your message" && git push origin main`

補足: `package.json` の `homepage` は `https://www.smart-mahjong.com/` に設定されています。公開URLを変更する場合は `homepage` も合わせて更新してください。
