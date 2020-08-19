class Person {
  constructor(name) {
    this.name = name;
    this.fiance = null;
    this.candidates = [];
    this.candidateIndex = 0;
  };

  rank(person) {
    return this.candidates.indexOf(person)
  }

  prefers(person) {
    return this.rank(person) < this.rank(this.fiance)
  }

  nextCandidate() {
    return this.candidateIndex >= this.candidates.length ? null
    : this.candidates[this.candidateIndex++]
  }

  engageTo(person) {
    if (person.fiance) person.fiance.fiance = null;
    person.fiance = this;
    if (this.fiance) this.fiance.fiance = null;
    this.fiance = person;
  }

  swapWith(person) {
    console.log("%s and %s swap partners", this.name, person.name);
    let thisFiance = this.fiance;
    let personsFiance = person.fiance;
    this.engageTo(personsFiance);
    person.engageTo(thisFiance);
  }
};

const isStable = (guys, gals) => {
  let stability = true;
  guys.forEach(guy => {
    gals.forEach(gal => {
      if (guy.prefers(gal) && gal.prefers(guy)) stability = false;
    })
  });
  return stability;
};

const engageEveryone = (guys) => {
  let done = false;
  while (!done) {
    done = true;
    guys.forEach(guy => {
      if (!guy.fiance) {
        done = false;
        let gal = guy.nextCandidate();
        console.log(gal)
        if (!gal.fiance || gal.prefers(guy)) {
          guy.engageTo(gal);
        }
      }
    })
  }
};

getMarried = () => {
  let arnold, bob, charlie, david, eddy, fred, jimJames, april, bianca, christina, debbie, emily, frederica, kelly;
  
  const arriveOnTheDatingScene = () => {
    arnold = new Person("Arnold");
    bob = new Person("Bob");
    charlie = new Person("Charlie");
    david = new Person("David");
    eddy = new Person("Eddy");
    fred = new Person("Fred");
    jimJames = new Person("JimJames");
    april = new Person("April");
    bianca = new Person("Bianca");
    christina = new Person("Christina");
    debbie = new Person("Debbie");
    emily = new Person("Emily");
    frederica = new Person("Frederica");
    kelly = new Person("Kelly")
  }

  arriveOnTheDatingScene();

  let guys = [arnold, bob, charlie, david, eddy, fred, jimJames];
  let gals = [april, bianca, christina, debbie, emily, frederica, kelly];


  arnold.candidates = [christina, april, debbie, kelly, frederica, emily, bianca];
  bob.candidates = [emily, frederica, april, debbie, kelly, bianca, christina];
  charlie.candidates = [bianca, debbie, kelly, emily, christina, frederica];
  david.candidates = [debbie, kelly, emily, christina, bianca, frederica, april];
  eddy.candidates = [frederica, christina, bianca, emily, debbie, april, kelly];
  fred.candidates = [april, bianca, frederica, emily, christina, kelly, debbie];
  jimJames.candidates = [kelly, frederica, christina, bianca, april, debbie, emily];
  april.candidates = [eddy, fred, david, arnold, jimJames, charlie, bob];
  bianca.candidates = [david, arnold, jimJames, charlie, eddy, fred, bob];
  christina.candidates = [arnold, eddy, fred, bob, charlie, jimJames, david];
  debbie.candidates = [jimJames, charlie, david, fred, bob, arnold, eddy];
  emily.candidates = [fred, bob, arnold, jimJames, david, eddy, charlie];
  frederica.candidates = [jimJames, arnold, fred, david, bob, eddy, charlie];
  kelly.candidates = [jimJames, david, arnold, eddy, charlie, bob, fred];

  engageEveryone(guys);
  
  guys.forEach(guy => {
    console.log("%s is engaged to %s", guy.name, guy.fiance.name);
  })
  console.log("Stable = %s", isStable(guys, gals) ? "Yes" : "No")
}

getMarried();