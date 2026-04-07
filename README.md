# IT学習サーバホームページ

```sh
Discordサーバ「IT学習」ホームページ
```
## 使用技術一覧
[![Open in Astro](https://img.shields.io/badge/Open%20in-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)

## プロジェクト構成

```sh
/
├── src/
│   ├── assets/                 # 各種アイコン・ロゴの保存フォルダ
│   ├── components/             # 画面共通部品フォルダ
│   │  ├── Footer.astro         # フッターファイル
│   │  ├── Header.astro         # ヘッダーファイル
│   │  └── MemberCard.astro     # メンバー紹介カード定義ファイル
│   ├── layouts/                # 画面構成定義用フォルダ
│   │  └── layout.astro         # 画面構成定義ファイル
│   ├── pages/                  # Webページ定義用フォルダ
│   │  ├── index.astro          # メイン画面ファイル
│   │  ├── members.astro        # メンバー紹介画面ファイル
│   │  └── members/             # メンバー個人画面定義フォルダ
│   ├── scripts/                # 共通スクリプト用フォルダ
│   │  └── change-light-dark.js # ダークモード/ライトモード切替用スクリプト
│   └── styles/                 # 共通CSS用フォルダ
│      └── global.css           # 共通CSS定義用ファイル
├── .nvmrc                      # Node.jsバージョン
└── package.json                # 依存パッケージ定義ファイル
```
## 開発環境での動作確認
### 0.事前準備： Node.js(npm)をinstallする
.nvmrcに記載しているバージョンのNode.jsをインストールしてください

### 1. 依存パッケージをインストールする
```bash
npm install
```
### 2. 開発用サーバを立てる
```bash
npm run dev
```
### 3. ターミナルに表示されているURLにアクセスする
例
>http://localhost:4321/it-study-server-website/

## メンバー追加のためにやること
### 1. pages/members.astroに自分のカードを追加する
他メンバのものを参考に、`Card`タグを書いてください
### 2. pages/membersに自分のフォルダを作成する
他メンバーのものを参考に、新しいフォルダを作成してください    
次に、そのフォルダ内の `index.astro` を編集してください  
最後に1で作成した `Card` の `personalPageLink` を、そのフォルダのパスに変更してください。