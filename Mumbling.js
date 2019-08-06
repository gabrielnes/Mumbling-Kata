function accum(s) {

    if (typeof(s) == Number) return;

    let temp = '';
    let result = '';

    for (let i = 0; i < s.length; i++){

        temp = (s[i]).toLowerCase();
        result += temp.toUpperCase();

        for (let j = 0; j<i; j++){
            result += temp;
        }

        if (i < s.length - 1){
            result += '-';
        }  
    }
    return result;
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));
