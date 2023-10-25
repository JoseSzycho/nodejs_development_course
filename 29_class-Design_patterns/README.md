# Class 29 - Design patterns

**Design patterns**: it have 3 groups.

- structural
- creational
- behavioral

**Aggregation**

Is when class is part of another. But one class can exist with out the other.

![Alt text](image.png)

**Composition**

Composition is a special case of aggregation. In a more specific manner, a restricted aggregation is called composition. When an object contains the other object, if the contained object cannot exist without the existence of container object, then it is called composition.

![Alt text](image-1.png)

**Dependency**

Change in structure or behaviour of a class affects the other related class, then there is a dependency between those two classes. It need not be the same vice-versa. When one class contains the other class it this happens.

![Alt text](image-2.png)

**Generalization**

Inheritance or some interface.

![Alt text](image-3.png)

## Creational design patterns

https://refactoring.guru/es/design-patterns/factory-method

Are pattern that help us to create objects.

### Simple factory

Use to create a object when it have some complex logic and we do not want to repeat the logic.

```ts
// Example 1
interface Door {
  getWidth: number;
  getHeight: number;
}

class WoodenDoor implements Door {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}
```

```ts
// Example 2
interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions(): void {
    console.log('asking about design patterns');
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions(): void {
    console.log('Asking about community building');
  }
}

interface HiringManager {
  makeInterviewer(): Interviewer;
  takeInterview(): void;
}

class DeveloperManager implements HiringManager {
  makeInterviewer(): Interviewer {
    return new Developer();
  }

  takeInterview(): void {
    this.makeInterviewer().askQuestions();
  }
}

class CommunityExecutiveManager implements HiringManager {
  makeInterviewer(): Interviewer {
    return new CommunityExecutive();
  }

  takeInterview(): void {
    this.makeInterviewer().askQuestions();
  }
}

// Using it
// As we can see, I do not care about the questions, the principal class have the correct question stored.
new DeveloperManager().takeInterview();
```

### Abstract factory

Is like a factory of factories.

We have a set of factories, and they decide what to do.

https://refactoring.guru/es/design-patterns/abstract-factory

```ts
interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  getDescription(): void {
    console.log("I'm a wooden door");
  }
}

class IronDoor implements Door {
  getDescription(): void {
    console.log("I'm a iron door");
  }
}

interface DoorFittingExpert {
  getDescription(): void;
}

class Carpenter implements DoorFittingExpert {
  getDescription(): void {
    console.log('I only fit wooden doors');
  }
}

class Welder implements DoorFittingExpert {
  getDescription(): void {
    console.log('I only fit iron doors');
  }
}

interface DoorFactory {
  makeDoor(): Door;
  takeFittingExpert(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor();
  }
  takeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor();
  }
  takeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

// Using everything
let factory: DoorFactory = new WoodenDoorFactory();
let door = factory.makeDoor();
let expert = factory.takeFittingExpert();
```

### Builder

It help us to create something partially or with complex structure and then use it.

https://refactoring.guru/es/design-patterns/builder

```ts
class Burger {
  private size: number;
  private cheese: boolean;
  private lettuce: boolean;
  private bacon: boolean;
  private tomato: boolean;

  constructor(BurgerBuilder: BurgerBuilder) {
    this.size = BurgerBuilder.size;
    this.cheese = BurgerBuilder.cheese;
    this.lettuce = BurgerBuilder.lettuce;
    this.bacon = BurgerBuilder.bacon;
    this.tomato = BurgerBuilder.tomato;
  }
}

class BurgerBuilder {
  public size;
  public cheese = false;
  public lettuce = false;
  public bacon = false;
  public tomato = false;

  constructor(size: number) {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
    return this.cheese;
  }

  addLettuce() {
    this.lettuce = true;
    return this.lettuce;
  }

  addBacon() {
    this.bacon = true;
    return this.bacon;
  }

  addTomato() {
    this.tomato = true;
    return this.tomato;
  }

  build(): Burger {
    return new Burger(this);
  }
}

// Using it
let burgerBuilder = new BurgerBuilder(20);
burgerBuilder.addBacon().addChese();

let burger = burgerBuilder.build();

let burger2 = (new BurgerBuilder(20)).addLettuce().addCheese().build();
```
