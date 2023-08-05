function solution(n: number): boolean {
    const temp: string[] = n.toString().split('');
    let sum: number = 0;
    for (let i = 0; i < temp.length / 2; i++) {
        sum = sum + Number(temp[i]) - Number(temp[temp.length/2 + i]);
    }

    return sum === 0;
}
