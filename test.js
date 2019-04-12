const CaptureStdout = require('capture-stdout')
const assert = require('assert')

const Monarchy = require('./monarchy')
const Person = require('./person')

describe('Monarchy', () => {
  it('prints succession in expected order', () => {
    const motherOfMaege = new Person('Mother of Maege', false, true)
    const motherMaegeMonarchy = new Monarchy(motherOfMaege)
  
    const jeor = new Person('Jeor', false, false)
    motherMaegeMonarchy.birth('Mother of Maege', jeor)
    const jorah = new Person('Jorah', true, false)
    motherMaegeMonarchy.birth('Jeor', jorah)
    const lynesse = new Person('Lynesse Hightower', true, true)
    motherMaegeMonarchy.birth('Jeor', lynesse)
    const maege = new Person('Maege', true, true)
    motherMaegeMonarchy.birth('Mother of Maege', maege)
    const dacey = new Person('Dacey', false, true)
    motherMaegeMonarchy.birth('Maege', dacey)
    const alysane = new Person('Alysane', true, true)
    motherMaegeMonarchy.birth('Maege', alysane)
    const lyra = new Person('Lyra', true, true)
    motherMaegeMonarchy.birth('Maege', lyra)
    const jorelle = new Person('Jorelle', true, true)
    motherMaegeMonarchy.birth('Maege', jorelle)
    const lyanna = new Person('Lyanna', true, true)
    motherMaegeMonarchy.birth('Maege', lyanna)
    const daughterOfAlysane = new Person(
      'Daughter of Alysane',
      true,
      true
    )
    motherMaegeMonarchy.birth('Alysane', daughterOfAlysane)
    const sonOfAlysane = new Person(
      'Son of Alysane',
      true,
      false
    )
    motherMaegeMonarchy.birth('Alysane', sonOfAlysane)
  
    const outputCapturer = new CaptureStdout()
    outputCapturer.startCapture()
    motherMaegeMonarchy.printSuccession()
    outputCapturer.stopCapture()
  
    const outputLines = outputCapturer.getCapturedText()
    const expectedOutput = [
      'Maege', 'Alysane', 'Daughter of Alysane', 'Lyra', 'Jorelle', 'Lyanna'
    ]
    assert.deepEqual(outputLines, expectedOutput)
  })
})
