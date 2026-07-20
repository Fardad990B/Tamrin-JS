// تمرین 03
// let c = Number(prompt ('یک عدد را وارد کنید'))
// function fa(c) {
//     let farenhait = c * 1.8 + 32
//     return farenhait; 
// }
// alert (fa(c));

// تمرین 04
// let t = Number(prompt('طول را وارد کنید'))
// let a = Number(prompt('عرض را وارد کنید'))
// function masahat_mostatil( t , a ) {
//     let masahat = t * a
//     return masahat;
// }
// alert (masahat_mostatil( t , a ) + 'مساحت')
// function mohet_mostatil( t, a ) {
//     let mohet = ( t * 2 )  + ( a * 2 )
//     return mohet; 
// }
// alert (mohet_mostatil( t, a ) + 'محیط')

// تمرین 05
// let number = Number(prompt('یک عدد را وارد کنید'))
// if ( number < 0 ) {
//     alert('این عدد منفی است')
// } else if ( number > 0 ) {
//     alert('این عدد مثبت است')
// } else if ( number == 0 ) {
//     alert('این عدد 0 است')
// }

// تمرین 06
// let number = Number(prompt('یک عدد وارد کنید'))
// function zogofard( number ) {
// if ( number % 2 == 0 ) {
//     alert('این عدد زوج است')
// } 
// else {
//     alert('این عدد فرد است')
// }
// }
// zogofard( number );

// تمرین 10
// let number = Number(prompt('مبلغ خرید را وارد کنید'))
// if ( number < 500 ) {
//     alert ('مبلغ شما شامل تخفیف نمی باشد')
// } else if ( number > 500 && number < 1000 ) {
//     let dah = number - (number * 0.1)
//     alert (dah + 'شما شامل 10% تخفیف شدید این هم مبلغ نهایی')
// } else if ( number >= 1000 ) {
//     let best = number - (number *0.2)
//     alert (best + 'شما شامل 20% تخفیف شدید این هم مبلغ نهایی')
// }

// تمرین 14
// let number = Number(prompt('یک عدد وارد کنید'))
// for ( let i = 1 ; i <= 10 ; i++ ) {
//     number * i
//     console.log(`${number} * ${i} = ${number * i}`);
// }

// تمزین 20
// اینو نتونستم مغزم جواب نداد
// let number = Number(prompt('یک عدد وارد کنید'))
// for ( let n = 2 ; n <= 100 ; n++ ) {
//     if ( number % n === 0 ){
//         alert ('این عدد اول نیست')
//     } else {
//         alert ('ین عدد اول است')
//     }
// }

// تمرین 24
// const adadsecret = 19;
// let number = Number(prompt('یک عدد وارد کنید'))
// if ( number < adadsecret ) {
//     alert('این عدد کمتر از عدد مورد نظر است')
// } else if ( number > adadsecret ) {
//     alert('این عدد بیشتر از عدد موردنظر است')
// } else {
//     alert('مساوی است باریکلا')
// }