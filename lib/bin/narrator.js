class Narrator {
  constructor() {
    this.last = {
      idEntity: 0,
      livings: []
    }
  }

  compare(json) {
    const storylines = []

    const actual = JSON.parse(json)
    for (let i = 0; i < actual.idEntity; i++) {
      const entity = actual.livings[i]
      const past = this.last.livings[i]

      if (entity && !past) {
        storylines.push(`${entity.type}#${entity.id} is ${entity.origin}`)
      }
    }

    this.last = actual
    return storylines
  }
}

module.exports = Narrator
