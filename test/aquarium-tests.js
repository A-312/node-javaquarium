'use strict'

const chai = require('chai')
const expect = chai.expect

describe('javaquarium init tests', function() {
  const Javaquarium = require('../')

  let aquarium

  it('must init', function() {
    expect(() => new Javaquarium()).to.not.throw()

    expect(() => {
      aquarium = new Javaquarium({
        fish: 1,
        seaweed: 3
      })
    }).to.not.throw()
  })

  it('must run', function() {
    expect(() => aquarium.run()).to.not.throw()
  })

  it('must tell the expected story', function() {
    expect(aquarium.storylines).to.deep.equal([
      'fish#0 is added',
      'seaweed#1 is added',
      'seaweed#2 is added',
      'seaweed#3 is added'
    ])
  })

  it('must run', function() {
    expect(() => aquarium.run()).to.not.throw()
  })

  it('must tell the expected story', function() {
    expect(aquarium.storylines).to.deep.equal([])
  })
})
