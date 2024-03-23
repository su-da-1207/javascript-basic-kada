// データオブジェクト生成
const today = new Date();

// 年を取得
const year = today.getFullYear();

// 月を取得
const month = today.getMonth() + 1;

// 日を取得
const date = today.getDate();

// 年月日を出力
console.log(year + '年' + month + '月' + date + '日');