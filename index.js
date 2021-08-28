
//Document has three different way of Defining and using Async
//  1st is callBack
//  2nd is prmise and await
//  3rd in prmise and then & catch



console.log('Starting Asynchronous JS');




//CALLBACK      CALLBACK        CALLBACK
// function waiterCallBack(value){
//     console.log(value);
//     order(orderCallBack);
// }

// const orderCallBack=(val)=>{
//     console.log(val);
// }


// const order=(e)=>{
//     setTimeout(()=>{
//         console.log('Going through menu');
//         e('Ordering food');
//     }, 10);
//     console.log('Thinking...!!');
// }


// const waiter=(e)=>{
//     setTimeout(()=>{
//         console.log('Waiter approaches');
//         e('Waiter handed over the menu');

//     }, 20);

// }

//waiter(waiterCallBack);




//#################################




//AYNC & AWAIT      ASAYNC & AWAIT      ASYNC & AWAIT        




// const waiter = () => {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('Waiter Approaches');
//             resolve('no errors in waiter function')
//         }, 20);
//     });
//     return promise;
// }
// const order = () => {
//     let promise= new Promise(function(resolve, reject){
//         setTimeout(() => {
//             console.log('Going through menu');
//             resolve('no errors in order function')
//         }, 20);
//     });
//     return promise;
// }

// async function play(){
//     let wait = await waiter();      //wait stores the return value, but not print it till it is told to do so 
//     console.log('Waiter handed over the menu');     //we can write it into resolve, that is basically a callback
//     let odr = await order();
//     console.log('Ordering food')
// }
// play ();





//####################################




//PROMISE THEN & CATCH          //PROMISE THEN & CATCH



console.log('Reserving a table at resturant');

const waiter=()=>{
    let promise = new Promise(function (resolve, rejection){
        setTimeout(()=>{
            console.log('Waiter Approaches');
            resolve('No error in waiter function');
        })
    }, 20);
    return promise;
}

const order=()=>{
    let promise = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Going through menu');
            resolve('No error in order function');
        })
    }, 10)
    return promise;
}

let promise = waiter ();
promise.then((value)=>{
    console.log('Waiter handed over the menu');
    return order();
})
.then((value)=>{
    console.log('Ordering food');
})
.catch((error)=>{
    console.log(error);
})

