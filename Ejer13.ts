function solution(inputString: string): string {
    const regex = /\((\w*)\)/g;

    const replaceParentecis = (input: string): string => {
        return input.replace(regex, (_, toReplace) => toReplace.split('').reverse().join(''));
    };

    let result = inputString;
    let replaced = replaceParentecis(result);

    while (replaced !== result) {
        result = replaced;
        replaced = replaceParentecis(result);
    }

    return result;
}