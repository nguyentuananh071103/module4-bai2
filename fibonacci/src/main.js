function caculateFibonacci(n) {
    var a = 0;
    var b = 1;
    var count = 2;
    var t = 1;
    var c;
    while (count <= n) {
        c = a + b;
        count++;
        t += c;
        a = b;
        b = c;
    }
    return t;
}
console.log(caculateFibonacci(8));
