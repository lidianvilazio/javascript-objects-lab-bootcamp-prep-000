var objects = {key: "value"}


var recipes = Object.assign({}, objects)


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
