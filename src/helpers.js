export function serialize(obj) {
  let queryString = "";
  for (let key in obj) {
    queryString += `search-link?${key}=${obj[key]}`;
  }
  return queryString;
}
