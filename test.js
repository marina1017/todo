'use strict';
//Node.jsでテストをするためのモジュールを呼び出し
const todo = require('./index.js');
const assert = require('assert');

//todoとlistのテスト
todo.todo('ノートを買う');
todo.todo('鉛筆を買う');
//assert.deepEqualは与えられたオブジェクトや配列の中身まで比較してくれるequal関数
assert.deepEqual(todo.list(), ['ノートを買う','鉛筆を買う']);

//doneとdonelistのテスト
todo.done('鉛筆を買う');
assert.deepEqual(todo.list(),['ノートを買う']);
assert.deepEqual(todo.donelist(),['鉛筆を買う']);

// delのテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');
assert.deepEqual(todo.list(), []);
assert.deepEqual(todo.donelist(), []);


console.log('テストが正常に完了しました');

