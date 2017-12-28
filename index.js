var objects = {key: "value"}


var recipes = Object.assign({}, objects)


function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
