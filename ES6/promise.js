// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve('success');
//     } else {
//         reject('failed');
//     }
// });

// p.then((message) => {
//     console.log('This is in then ' + message);
// }).catch((message) => {
//     console.log('This is in catch ' + message);
// });


let p = new Promise((resolve, reject) => {
    let value = true;
    if (value) resolve('Success');
    else reject("Failed");
});
p.then((message) => {
    console.log('Result: '+message);
});