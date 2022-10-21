// CallBack 
const fs = require('fs');
fs.readdir('.', function (err, files) {
    if (err) {
        console.log('Error finding files: ' + err)
    }
    else {
        console.log(files);
    }
});
// 위 fs.readdir이 끝나기 전에 수행
console.log("ENDED");

// Promise
// const fs = require('fs');
// const fsPromises = fs.promises;
// fsPromises.readdir('.')
//     .then(files => {
//         console.log(files);
//     })
//     .catch(err => console.error(err));
// // 위 fsPromises.readdir이 끝나기 전에 수행
// console.log("ENDED");

// Async Await
const fs = require('fs');
const fsPromises = fs.promises;
async function fn() {
    try {
        let files = await fsPromises.readdir('.');
        console.log(files);
    }
    catch (err) {
        console.error(err);
    }
}
fn(); // async 함수 이기에, 완료 전에 다음 로직이 동작
console.log("ENDED");