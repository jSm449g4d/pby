# test
工事中

### CaaS
https://pby-tlnesjcoqq-an.a.run.app/
### 本番
https://ishihara.tmu.ac/

## ディレクトリ構成
PF_apps/  
┣www/ (アプリ本体)  
┃┣html/ (公開ファイル置き場)  
┃┃┣static/(静的ファイル置き場)  
┃┃┃┣src/(アプリ本体のスクリプト置き場)  
┃┃┃┗img/(アプリで使う画像置き場)  
┃┃┣main.html (アプリ本体ののhtml)  
┃┃┣favicon.ico (ファビコン)  
┃┃┗robots.txt (googleクローラー等への指示)  
┃┣Typescript/ (フロントエンド関係)  
┃┃┣tsx/ (フロントエンドソースコード置き場)  
┃┃┃┣applicaton (Webアプリ本体)  
┃┃┃┣component (Webアプリで使うコンポーネント置き場)  
┃┃┃┣stylecheets (sass置き場)  
┃┃┃┗index.tsx (main.htmlから呼び出される基幹)  
┃┃┣tsconfig.json (Typescript設定)  
┃┃┗webpack.config.js (Webpack設定)  
┃┣Flask/ (バックエンドAPI置き場)  
┃┣Dockerfile (環境構築方法の記述,CaaSへのデプロイ用)  
┃┣wsgi.py (Flask鯖本体/ルーティング等の処理実装箇所)  
┃┗requirements.txt (必要なライブラリ一覧)  
┣assets (README.mdで使う画像置き場)  
┣.gitignore (git pushでpushしたくないファイル一覧)  
┣cloudbuild.yaml (CaaSへのデプロイ指示書)  
┣LICENSE (MIT: ご自由にお使いください)  
┗README.md この文書  
