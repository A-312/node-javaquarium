const Fish = require('./bin/fish.js')
const Seaweed = require('./bin/seaweed.js')
const Narrator = require('./bin/narrator.js')

class Javaquarium {
  constructor(opts) {
    this.turn = 0
    this.idEntity = 0
    this.livings = []
    this.narrator = new Narrator()

    if (opts && opts.fish > 0) {
      for (let i = opts.fish; i > 0; i--) {
        this.addEntity(Fish)
      }
    }

    if (opts && opts.seaweed > 0) {
      for (let i = opts.seaweed; i > 0; i--) {
        this.addEntity(Seaweed)
      }
    }
  }

  addEntity(Entity) {
    const entity = new Entity(this.inventoryEntity())
    this.livings.push(entity)
    entity.origin = 'added'
    entity.since = this.turn
  }

  inventoryEntity() {
    this.idEntity++

    return this.idEntity - 1
  }

  run() {
    this.writeStory()
  }

  writeStory() {
    this.storylines = this.narrator.compare(JSON.stringify(this))
  }
}

module.exports = Javaquarium
