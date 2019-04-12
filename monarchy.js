class Monarchy {

  constructor(firstRuler){
    this.firstRuler = firstRuler // root of the family tree
    this.nameToPerson = new Map()
    this.nameToPerson.set(this.firstRuler.name, firstRuler)
  }

  // Finds person w/ given name value and adds a new Person as a child.
  // Order of age of children for any person
  // is the order the children are born.
  birth(name, person){
    if (person.isLady){
      // lords are irrelevant to the order of succession
      // lords and all descendants of lords are ignored
      const namedPerson = this.nameToPerson.get(name)
      if (namedPerson){
        namedPerson.children.push(person)
        this.nameToPerson.set(person.name, person)
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
    for (let child of person.children){
      this.printSuccession(child)
    }
  }
}

module.exports = Monarchy
