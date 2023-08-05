function solution(a: number[]): number[] {
    const sortedNonNegative = a.filter(num => num !== -1).sort((a, b) => a - b);
    return a.map(num => (num === -1 ? num : sortedNonNegative.shift()!));
}