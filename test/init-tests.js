'use strict'

const chai = require('chai')
const expect = chai.expect

describe('convict', function() {
  const Javaquarium = require('../')

  it('must be valid', function() {
    expect(() => new Javaquarium()).to.not.throw()
  })
})
