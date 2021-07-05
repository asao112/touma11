console.log("=======================");
console.log("現在持っているタスク一覧");
console.log("=======================");
const housework = ['掃除','買い物','散歩'];
for ( i = 0; i < housework.length; i++){
    console.log(length++ + ": " + housework[i] );
}
const taskadd = prompt("タスクを入力してください");
const housetask = ['掃除','買い物','散歩'];
i = 0
alert("新しいタスクが入力されました");
console.log("=======================");
console.log("現在持っているタスク一覧");
console.log("=======================");
housetask.push(taskadd)
housetask.forEach( function(taskadd){
    console.log( i++ + ": " + taskadd);
});
prompt("「確認　追加　削除　終了」の4ついづれかを入力してください");