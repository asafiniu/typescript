var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theAnimalName, theSound, thePeeAction) {
        this.animalName = theAnimalName;
        this.sound = theSound;
        this.peeAction = thePeeAction;
    }
    Animal.prototype.nameAnimal = function (customName, format) {
        if (format) {
            this.animalName = format(customName, this.animalName);
        }
        else {
            this.animalName = customName + " the " + this.animalName;
        }
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, 'dog', 'bark', 'crouches down and lifts a tail') || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super.call(this, 'cat', 'meow', 'hides out in a litterbox') || this;
    }
    return Cat;
}(Animal));
var Crow = /** @class */ (function (_super) {
    __extends(Crow, _super);
    function Crow() {
        return _super.call(this, 'crow', 'caw', 'flies real high') || this;
    }
    return Crow;
}(Animal));
var Pet = /** @class */ (function () {
    function Pet(thePetName) {
        this.petName = thePetName;
    }
    return Pet;
}());
var Doggy = /** @class */ (function (_super) {
    __extends(Doggy, _super);
    function Doggy(thePetName) {
        var _this = _super.call(this) || this;
        _this.petName = thePetName;
        _super.prototype.nameAnimal.call(_this, thePetName);
        return _this;
    }
    return Doggy;
}(Dog));
var Kitty = /** @class */ (function (_super) {
    __extends(Kitty, _super);
    function Kitty(thePetName) {
        var _this = _super.call(this) || this;
        _this.petName = thePetName;
        _super.prototype.nameAnimal.call(_this, thePetName);
        return _this;
    }
    return Kitty;
}(Cat));
var PetCrow = /** @class */ (function (_super) {
    __extends(PetCrow, _super);
    function PetCrow(thePetName) {
        var _this = _super.call(this) || this;
        _this.petName = thePetName;
        _super.prototype.nameAnimal.call(_this, thePetName, function (name, animalName) {
            return animalName + " no. " + name;
        });
        return _this;
    }
    return PetCrow;
}(Crow));
var AnimalGroup = /** @class */ (function () {
    function AnimalGroup(animalMaker, animalNames) {
        var _this = this;
        this.animals = [];
        animalNames.forEach(function (animalName) {
            _this.animals.push(new animalMaker(animalName));
        });
    }
    AnimalGroup.prototype.makeSound = function () {
        return this.animals.map(function (animal) {
            return animal.animalName + " goes \"" + animal.sound + "\"";
        }).join('<br>');
    };
    AnimalGroup.prototype.makePee = function () {
        var groupType = this.animals[0].constructor;
        return "Each one of the " + this.animals.length + " " + groupType.name + "s just " + this.animals[0].peeAction + " and pees";
    };
    return AnimalGroup;
}());
var Litter = /** @class */ (function (_super) {
    __extends(Litter, _super);
    function Litter(catNames) {
        return _super.call(this, Kitty, catNames) || this;
    }
    return Litter;
}(AnimalGroup));
var Pack = /** @class */ (function (_super) {
    __extends(Pack, _super);
    function Pack(dogNames) {
        return _super.call(this, Doggy, dogNames) || this;
    }
    return Pack;
}(AnimalGroup));
var Murder = /** @class */ (function (_super) {
    __extends(Murder, _super);
    function Murder(number) {
        var _this = this;
        var names = [];
        for (var i = 1; i <= number; i++) {
            names.push(i);
        }
        _this = _super.call(this, PetCrow, names) || this;
        return _this;
    }
    return Murder;
}(AnimalGroup));
// MAIN
(function () {
    [
        new Litter(['Alice', 'Christopher']),
        new Pack(['Bobby', 'Danny']),
        new Murder(5)
    ].forEach(function (group) {
        document.writeln(group.makeSound() + "<br>");
        document.writeln(group.makePee() + "<br><br>");
    });
})();
