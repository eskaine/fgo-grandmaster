export function randomServants(length) {
    let max = 10;
    let arr = [];
    
    while(max > 0) {
        let random = 0;
        while(arr.indexOf(random) > -1) {
            random = Math.floor(Math.random() * length);
        }
        arr.push(random);
        max--;
    }

    return arr;
}

export function capitalize(string) {
    return `${string.substr(0, 1).toUpperCase()}${string.substr(1,)}`;
}