function caculateFibonacci(n: number) {
    let a: number = 0;
    let b: number = 1;
    let count: number = 2;
    let t: number = 1;
    let c;
    while (count <= n) {
        c = a + b;
        count++;
        t += c;
        a = b;
        b = c;
    }
    return t
}

console.log(caculateFibonacci(8))

