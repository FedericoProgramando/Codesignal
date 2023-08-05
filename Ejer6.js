function solution(statues) {
    let statuesNeeded = 0;
    statues.sort((a, b) => {
            return a - b;
        })
    for(let i = 0; i < statues.length; i++) {
        if(statues[i + 1] - statues[i] > 1) {
                statuesNeeded += statues[i + 1] - statues[i] - 1;
            }
    }
        return statuesNeeded;
    } 