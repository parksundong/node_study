/*
    논 블로킹(Non-Blocking) 기법
*/
function longRunningTask() {
    //오래 걸리는 작업
    console.log('오래 걸리는 작업 끝');
}
console.log('시작');
setTimeout(longRunningTask, 0);  //setTimeout(콜백함수, 밀리초)
console.log('다음 작업');