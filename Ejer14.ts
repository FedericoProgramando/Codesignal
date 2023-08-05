function solution(a: number[]): number[] {
    const result: number[] = [0, 0];
    
    for (let i = 0; i < a.length; i += 2) {
        result[0] += a[i];
        if (i + 1 < a.length) {
          result[1] += a[i + 1];
        }
      }
    
    return result;
    
    }