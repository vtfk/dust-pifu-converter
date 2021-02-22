const { logger } = require('@vtfk/logger')

const mergeArray = (enterprises, property) => {
  const merged = [].concat.apply([], enterprises.map(enterprise => enterprise[property]))

  logger('info', ['lib', 'merge-enterprises', 'merge', property, 'length', merged.length])
  return merged
}

module.exports = files => {
  logger('info', ['lib', 'merge-enterprises', 'start'])

  const person = mergeArray(files, 'person')
  const group = mergeArray(files, 'group')
  const membership = mergeArray(files, 'membership')

  logger('info', ['lib', 'merge-enterprises', 'finish'])

  return {
    enterprise: {
      person,
      group,
      membership
    }
  }
}
