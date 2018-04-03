class Animal {
  sound: string;
  animalName: string;
  peeAction : string;
  constructor(theAnimalName: string, theSound: string, thePeeAction: string) {
    this.animalName = theAnimalName;
    this.sound = theSound;
    this.peeAction = thePeeAction;
  }
  
  public nameAnimal(customName: string, format?: (name: string, animalName: string) => string) {
    if (format) {
      this.animalName = format(customName, this.animalName);
    } else {
      this.animalName = `${customName} the ${this.animalName}`;
    }
  }
}

class Dog extends Animal {
  constructor() {
    super('dog', 'bark', 'crouches down and lifts a tail');
  }
}

class Cat extends Animal {
  constructor() {
    super('cat', 'meow', 'hides out in a litterbox');
  }
}

class Crow extends Animal {
  constructor() {
    super('crow', 'caw', 'flies real high');
  }
}

class Pet {
  petName: string;
  constructor(thePetName: string) {
    this.petName = thePetName;
  }
}

class Doggy extends Dog implements Pet {
  petName: string;
  constructor(thePetName: string) {
    super();
    this.petName = thePetName;
    super.nameAnimal(thePetName);
  }
}

class Kitty extends Cat implements Pet {
  petName: string;
  constructor(thePetName: string) {
    super();
    this.petName = thePetName;
    super.nameAnimal(thePetName);
  }
}

class PetCrow extends Crow implements Pet {
  petName: string;
  constructor(thePetName: string) {
    super();
    this.petName = thePetName;
    super.nameAnimal(thePetName, (name: string, animalName: string) => {
      return `${animalName} no. ${name}`;
    });
  }
}

class AnimalGroup {
  ctor: new() => Animal;
  animals: Animal[] = [];
  constructor(animalMaker: new(string) => Animal, animalNames: string[]) {
    animalNames.forEach(animalName => {
      this.animals.push(new animalMaker(animalName));
    });
  }
  makeSound() {
    return this.animals.map((animal) => {
      return `${animal.animalName} goes "${animal.sound}"`;
    }).join('<br>');
  }
  makePee() {
    let groupType: any = this.animals[0].constructor;
    return `Each one of the ${this.animals.length} ${groupType.name}s just ${this.animals[0].peeAction} and pees`;
  }
}

class Litter extends AnimalGroup {
  constructor(catNames: string[]) {
    super(Kitty, catNames);
  }
}

class Pack extends AnimalGroup {
  constructor(dogNames: string[]) {
    super(Doggy, dogNames);
  }
}

class Murder extends AnimalGroup {
  constructor(number: Number) {
    let names = [];
    for (let i = 1; i <= number; i++) {
      names.push(i);
    }
    super(PetCrow, names);
  }
}

// MAIN
(function(){
  [
    new Litter(['Alice', 'Christopher']),
    new Pack(['Bobby', 'Danny']),
    new Murder(5)
  ].forEach (group => {
    document.writeln(`${group.makeSound()}<br>`);
    document.writeln(`${group.makePee()}<br><br>`);
  });
})();