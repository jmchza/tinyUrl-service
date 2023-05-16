base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let encoded = '';

function encodeB62(input) {
    
    input = input + now;
    while (input > 0) {
        encoded = base62[input % 62] + encoded;
    
        input = Math.floor(input / 62);
    }

    return encoded;

}


console.log(encodeB62(1234535));
