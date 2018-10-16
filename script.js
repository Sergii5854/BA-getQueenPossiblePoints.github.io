window.onload = function () {

    function decToHex(n) {

        var number = Number(n);
        if (!!number) return number.toString(16)
        return false
    }


    function decToBin(n) {
        var number = Number(n);
        if (!!number) return number.toString(2)
        return false
    }

    function hexToBin(n) {

        var isHex = parseInt(n, 16);
        if ((isHex.toString(16) === n)) return parseInt(n, 16).toString(2);

        return false
    }

    function binToHex(n) {
        var isBin = parseInt(n, 2);
        if ((isBin.toString(2) === n)) return parseInt(n, 2).toString(16);

        return false
    }


    console.group('decToHex');
    console.log('`12` => ', decToHex('12'))
    console.log('`text` => ', decToHex('text'))
    console.log('`12 text` => ', decToHex('12 text'))
    console.log('111 => ', decToHex(111))
    console.log( 'undefined => ', decToHex(undefined))
    console.log('NaN => ', decToHex(NaN))
    console.log('`1111111` =>', decToHex('1111111'))
    console.groupEnd();


    console.group('decToBin');
    console.log('`12` => ', decToBin('12'))
    console.log('`text` => ', decToBin('text'))
    console.log('`12 text` => ', decToBin('12 text'))
    console.log('111 => ', decToBin(111))
    console.log( 'undefined => ', decToBin(undefined))
    console.log('NaN => ', decToBin(NaN))
    console.log('`1111111` =>', decToBin('1111111'))
    console.groupEnd();

    console.group('hexToBin');
    console.log('`1` => ', hexToBin('1'))
    console.log('`12` => ', hexToBin('12'))
    console.log('`7f` => ', hexToBin('7f'))
    console.log('`text` => ', hexToBin('text'))
    console.log('`12 text` => ', hexToBin('12 text'))
    console.log('111 => ', hexToBin(111))
    console.log( 'undefined => ', hexToBin(undefined))
    console.log('NaN => ', hexToBin(NaN))
    console.log('`1111111` =>', hexToBin('1111111'))
    console.groupEnd();

    console.group('binToHex');
    console.log('`12` => ', binToHex('12'))
    console.log('`101` => ', binToHex('101'))
    console.log('`1111111` => ', binToHex('1111111'))
    console.log('`text` => ', binToHex('text'))
    console.log('`12 text` => ', binToHex('12 text'))
    console.log('111 => ', binToHex(111))
    console.log( 'undefined => ', binToHex(undefined))
    console.log('NaN => ', binToHex(NaN))
    console.log('`1111111` =>', binToHex('1111111'))
    console.groupEnd();
};