# 水飴信号２ MEANスタックバージョン

## 概要
自分のホームページをMEANスタックで作りました  
SPAとの相性は悪そうだなと思ったので作り直します

## 導入方法
```
$ git clone https://github.com/mizzsig/sssignal2.git
$ cd sssignal2
$ npm install
$ ng build -prod -aot
$ node server.js
```
で3000番ポートにサーバが立つはず！

src以下の部分を変更してビルドし直すときは都度
```
$ ng build -prod -aot
```
を打つ！
