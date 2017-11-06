'use strict';
// key:タスクの文字列　calue:完了しているかどうかの真偽値
const tasks = new Map();

// TODOを追加する
//@param{string} task
//連想配列に未完了の状態でタスクを追加
function todo(task) {
    tasks.set(task, false);
}

/*タスクと完了したかがどうかが含まれる配列を受取り完了したら返す
@param{array}tasukAndIsDonePair
@return{boolean}完了したかどうか
*/
//二つ目の要素（終わってるか終わっていないか）の審議機を確認して完了であるかを返す関数
function isDone(taskAndIsDonePair) {
	return taskAndIsDonePair[1];
}

/*
タスクと完了したかどうかが含まれる配列を受取完了していないかを返す
@param{array} taskAndIsDonePair
@return{boolean}　完了していないかどうか
*/
function isNotDone(taskAndIsDonePair) {
	return !isDone(taskAndIsDonePair);
}

/*
TODの一覧の配列を取得する　TODOになったタスクの文字列の一覧を配列として返す
Array.form関数は連想配列のMapをキーと値で構成される要素2つの配列に変換する
キーに 'hoge' という文字列、 値に 1 →[['hoge', 1]]
filterという配列の関数は与えられた関数の文字列がtrueであるときだけその配列の要素を選別した配列を作ることが出来る
「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返すことが出来る
@return {array}
*/
function list() {
	return Array.from(tasks).filter(isNotDone).map(t => t[0]);
}

/*
TODOを完了状態にする
@param{string} task
連想配列 に task がキーとして登録されているかを確認し、もし存在すれば、完了状態を true に変更
*/
function done(task) {
	if (tasks.has(task)) {
		tasks.set(task, true);
	}
}


/*
完了済みのタスクの一覧の配列を取得する
@return {aary}
list 関数の、 filter の条件が真偽で反転した実装
*/
function donelist() {
	return Array.from(tasks).filter(isDone).map(t => t[0]);
}

/*
項目を削除する
@param{string]}task
*/
function del(task) {
	tasks.delete(task);
}


module.exports = {
	todo: todo,
	list: list,
	done: done,
	donelist: donelist,
	del: del
};

