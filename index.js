const Queue = require('./queue')

class Monarchy {

  constructor(firstRuler){
    firstRuler.childrenByAge = new Queue()
    this.firstRuler = firstRuler // root of the family tree
    this.nameToPerson = new Map()
    this.nameToPerson.set(this.firstRuler.name, firstRuler)
  }

  // finds person w/ given name value and adds a new Person as a child
  birth(name, person){
    if (person.isLady){
      // lords are irrelevant to the order of succession
      // lords and all descendants of lords are ignored
      const namedPerson = this.nameToPerson.get(name)
      if (namedPerson){
        person.childrenByAge = new Queue()
        namedPerson.childrenByAge.add(person)
      }
    }
  }

  // finds a person w/ given name value and 'kills' them
  death(name){
    const namedPerson = this.nameToPerson.get(name)
    if (namedPerson){
      namedPerson.isAlive = false
    }
  }

  // prints the order of succession
  // Perform DFS on tree of Persons, printing name of the person if alive.
  // Then, recurse on children in the order of the queue,
  // representing an ordering from oldest to youngest.
  printSuccession(person = this.firstRuler){
    if (person.isAlive){
      console.log(person.name)
    }
    for (let child of person.childrenByAge){
      this.printSuccession(child)
    }
  }
}