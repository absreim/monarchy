class Person {
  constructor(nameStr, aliveBool, genderBool) {
    this.name = nameStr
    this.isAlive = aliveBool
    this.isLady = genderBool
    this.children = []
  }
}

module.exports = Person
