import axios from "axios";

function rand(length) {
  return Math.floor(Math.random() * length);
}

export function capitalize(string) {
  return `${string.substr(0, 1).toUpperCase()}${string.substr(1)}`;
}

export function randomServants(length) {
  let max = 10;
  let arr = [];

  while (max > 0) {
    let random = rand(length);
    while (arr.indexOf(random) > -1) {
      random = rand(length);
    }
    arr.push(random);
    max--;
  }

  return arr;
}

export function searchServants(searchValue, data) {
  let resultsArr = [];

  for (let servant of data) {
    if (resultsArr.length >= 5) {
      break;
    }

    if (servant.name.toLowerCase().includes(searchValue.toLowerCase())) {
      resultsArr.push({ id: servant.collectionNo, name: servant.name });
    }
  }

  return resultsArr;
}

export async function retrieveData(url, callback) {
  try {
    let res = await axios.get(url);
    callback(res);
  } catch (error) {
    console.error(error);
  }
}

