'use strict'

const chai = require('chai')
const expect = chai.expect

describe('subclass tests', function() {
  describe('Entity must be valid', function() {
    const Entity = require('../lib/bin/entity.js')
    let entity

    it('can construct', function() {
      expect(() => {
        entity = new Entity(312, 'plane')
      }).to.not.throw()

      expect(entity).to.deep.equal({
        id: 312,
        type: 'plane'
      })
    })
  })

  describe('Fish must be valid', function() {
    const Fish = require('../lib/bin/fish.js')
    let fish

    it('can construct', function() {
      expect(() => {
        fish = new Fish(4)
      }).to.not.throw()

      expect(fish).to.deep.equal({
        id: 4,
        type: 'fish'
      })
    })
  })

  describe('Seaweed must be valid', function() {
    const Seaweed = require('../lib/bin/seaweed.js')
    let seaweed

    it('can construct', function() {
      expect(() => {
        seaweed = new Seaweed(4)
      }).to.not.throw()

      expect(seaweed).to.deep.equal({
        id: 4,
        type: 'seaweed'
      })
    })
  })
})
