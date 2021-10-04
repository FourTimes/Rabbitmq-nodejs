function clean(object) {
  for (var propertyName in object) {
    if (object[propertyName] === null || object[propertyName] === undefined) {
      delete object[propertyName];
    }
  }
  return object;
}

module.exports = clean;
