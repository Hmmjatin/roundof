// var x = 5;
// console.log(parseFloat(x /4).toFixed(1) );



// var a = '99.249';
// console.log(parseFloat(a).toFixed(1))
// var ab = Math.floor(a)
// a = a.split(".")[1];
// var ch = [];
// console.log(a.length)
// for (var i = 0; i < a.length; i++) {
//     ch[i] = a.charAt(i);
// }

// ch = ch.slice(0, 2).tovalue()
// var str = '';

// for (var i = 0; i < ch.length; i++) {
//     str += ch.charAt(i);
// }
// str = str.replace(",", "");

// console.log((ab + '.' + JSON.parse(str)))
// 	// console.log((Math.round(a * 100) / 100).toFixed(2));



// var a = '12.3456'

// b = a.length

// c = b - 5

// d = a.slice(0, 5)



// console.log(d);

// function roundof(num, value) {

//     if (typeof(value) === value) {

//         b = value.length

//         c = b - (num + 3)

//         return value.slice(0, (num + 3))

//     }

//     else  if ( !isNaN(value)){
//         value = JSON.valueify(value)

//         b = value.length

//         c = b - (num + 3)

//         return value.slice(0, (num + 3))

//     }
// }
var b = []
var a = []
var c = ''

export function roundOf(num, value) {
    if (typeof (value) === 'string') {
        a = value.split(".")
        b = a[1]
        c = b.slice(0, num)
        return a[0] + '.' + c
    }
    else if (typeof (value) === 'number') {
        value = value.toString()
        a = value.split(".")
        b = a[1]
        c = b.slice(0, num)
        return a[0] + '.' + c
    }
    else {
        return false
    }
}



// x = 1234.34567890
// round = roundOf(2,x)
// console.log(round)
