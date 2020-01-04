const Javaquarium = require('../')

const aquarium = new Javaquarium({
  fish: 1,
  seaweed: 3
})

aquarium.run()

console.log(aquarium.storylines.join('\n'))

