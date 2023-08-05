function solution(inputArray) {
    const cadenaOrdenadas = inputArray.sort((a, b) => b.length - a.length);
    
    return cadenaOrdenadas.filter(inputArray => inputArray.length >= cadenaOrdenadas[0].length);
    
    }