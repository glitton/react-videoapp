import _ from "lodash";
//function that paginates data in the client side
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //convert to a lodash wrapper, can chain diff methods
  //.value converts to a new array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
