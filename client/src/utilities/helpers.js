function rand(length) {
    return Math.floor(Math.random() * length);
}

export function randomServants(length) {
    let max = 10;
    let arr = [];
    
    while(max > 0) {
        let random = rand(length);
        while(arr.indexOf(random) > -1) {
            random = rand(length);
        }
        arr.push(random);
        max--;
    }

    return arr;
}

export function capitalize(string) {
    return `${string.substr(0, 1).toUpperCase()}${string.substr(1,)}`;
}