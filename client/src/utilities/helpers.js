function rand(length) {
    return Math.floor(Math.random() * length);
}

export function capitalize(string) {
    return `${string.substr(0, 1).toUpperCase()}${string.substr(1,)}`;
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

export function searchServants(searchValue, data) {
    let resultsArr = [];

      for(let servant of data) {
        if(resultsArr.length >= 5) {
          break;
        }

        if(servant.name.toLowerCase().includes(searchValue.toLowerCase())) {
          resultsArr.push({id: servant.collectionNo, name: servant.name, class: servant.className});
        }
      }

      return resultsArr;
}
