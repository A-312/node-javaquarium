const Entity = require('./entity.js')

class Fish extends Entity {
  constructor(id) {
    super(id, 'fish')
  }
}

module.exports = Fish
