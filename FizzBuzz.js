// let fizzBuzz = () =>{

//     for (let i = 1; i <= 256 ; i++){
//         let ans = [];
//         if (i % 3 === 0){
//             ans.push('Fizz')
//         }if (i % 13 === 0){
//             ans.push('Fezz')
//         }if (i % 5 === 0){
//             ans.push('Buzz')
//         }if (i % 7 === 0){
//             ans.push('Bang')
//         }if (i % 11 === 0 && ans.indexOf('Fezz') != -1){
//             ans = ['Fezz','Bong']
//         }else if (i % 11 === 0 && ans.indexOf('Fezz') === -1){
//             ans = ['Bong']
//         }else if (i%3 !=0 && i%5 !=0 && i%7 !=0 && i%11 !=0 && i%13 !=0){
//             ans = [i]
//         }if (i % 17 === 0 && typeof ans[0] != 'number'){
//             ans = ans.reverse()
//         }
       
//         console.log(ans.join(''))
//     }
// };

// fizzBuzz();

let fizzBuzz = () =>{

    for (let i = 1; i <= 256 ; i++){
        let ans = [];
        if (i % 3 === 0){
            ans.push('Fizz')
        }if (i % 13 === 0){
            ans.push('Fezz')
        }if (i % 5 === 0){
            ans.push('Buzz')
        }if (i % 7 === 0){
            ans.push('Bang')
        }if (i % 11 === 0 && ans.indexOf('Fezz') != -1){
            ans = ['Fezz','Bong']
        }if (i % 11 === 0 && ans.indexOf('Fezz') === -1){
            ans = ['Bong']
        }if (ans.length === 0){
            ans.push(i)
        }if (i % 17 === 0 && typeof ans[0] != 'number'){
            ans = ans.reverse()
        }
       
        console.log(ans.join(''))
    }
};

fizzBuzz();