export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `card-link?${key}=${obj[key]}`;
  }
  return queryString;
}
