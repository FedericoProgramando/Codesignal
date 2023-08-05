function solution(matrix) {
    let suma = 0;
    for(j=0; j < matrix[0].length; j++){
        for(i=0; i<matrix.length; i++){
            if (matrix[i][j] > 0) suma += matrix[i][j];
            else break;
        }
    }
return suma;
}