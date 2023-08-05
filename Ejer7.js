function solution(sequence) {
    var removed = 0
    var result = false
    for(var i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
           removed++
        if(sequence[i] <= sequence[i-2] && sequence[i +1] <= sequence[i-1]) {
            return false
          }
      }
    }
    return removed <= 1
}
