# API-Solo.Project

## 目次

1.  [イントロダクション](#イントロダクション)
1.  [目的](#目的)
1.  [DB構成](#DB構成)
1.  [API説明](#API説明)
    1.  [Create（追加）](#Create（追加）)
    1.  [Read（参照）](#Read（参照）)
    1.  [Update（更新）](#Update（更新）)
    1.  [Delete（削除）](#Delete（削除）)
1.  [おまけ](#おまけ)
    1.  [allUser（参照）](#allUser（参照）)

## イントロダクション

- 超シンプルなDB操作API群
- 極力オリジナリティを出さずに要件のみを忠実に再現できるかの挑戦


## 目的

- RESTのAPIを作成できるようになる
- Knexを用いてデータベースに接続できるようになる
- Express サーバーとデータベースを連携できるようになる

## DB構成

### usersTBL
- id: UserID(Integer：PrimaryKey)
- name: UserName(String)

## API説明

- 4つのAPIを作成（CRUD）

### Create（追加）

- usersTBLに追加するためのAPI
- Request
    - POST /api/user 

### Read（参照）
#### 指定されたユーザIDをキーにusersTBLから情報取得するためのAPI
- Request
    - GET /api/user/:id

### Update（更新）
#### 指定されたユーザIDの情報を更新するためのAPI
- Request
    - PATCH /api/user/:id

### Delete（削除）
#### 指定されたユーザIDの情報を削除するためのAPI
- Request
    - DELETE /api/user/:id


## おまけ

### allUser（参照）
#### DBの中身を確認する用のAPI
- Request
    - GET /api/users