var objects = {key: "value"}


var recipes = Object.assign({}, objects)


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, obj)
  delete newObject.[key]
  return newObject
}


function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object, {key})
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
