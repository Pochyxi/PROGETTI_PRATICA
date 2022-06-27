// //ISTANZE

// class Surgeon {
//     constructor(name, department) {
//       this._name = name;
//       this._department = department; // il trattino basso prima della chiave serve ad indicare che non bisogna accedere a questa proprietà da questo metodo
//       this._remainingVacationDays = 20;
//     }
//     get name() {
//         return this._name;
//     }
//     get department() {
//         return this._department;
//     }
//     get remainingVacationDays() {
//       return this._remainingVacationDays;
//     }
//     takeVacationDays (dayOff) {
//       return this._remainingVacationDays = this._remainingVacationDays - dayOff;
//     }
//   }

//   let surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');

//   let surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// // CHIAMATE METODO

// console.log(surgeonRomero.name);
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays);

// // EREDITA'

// class HospitalEmployee { // questa è la classe GENITORE
//   constructor (name) {
//     this._name = name;
//     this._remainingVacationDays  = 20;
//   }
//   get name () {
//     return this._name;
//   }
//   get remainingVacationDays () {
//     return this._remainingVacationDays;
//   }
//    takeVacationDays (dayOff) {
//     return this._remainingVacationDays = this._remainingVacationDays - dayOff;
//   }
//   static generatePassword() {
//     return Math.floor(Math.random() * 10001) // questo è un metodo statico, ciò significa che può essere chiamato solo usando la classe in cui esso e stato creato e non sulle istanze
//   }

// }

// class Nurse extends HospitalEmployee { // questa è la classe FIGLIO
//   constructor (name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }
//   get certifications () {
//     return this._certifications;
//   }
//   addCertification (newCertification) {
//     this._certifications.push(newCertification); // dato che certification ritorna un array con il metodo push() inseriamo un nuovo elemento nell'array
//   }
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']); // questo è un'istanza della classe Nurse

// nurseOlynyk.takeVacationDays(5);          // l'istanza nurseOlynyk ha ereditato il metodo takeVacationDays dall'istanza GENITORE HospitalEmployee e quindi essa è accessibile
// console.log(nurseOlynyk.remainingVacationDays);

// nurseOlynyk.addCertification('Genetics'); // lancio il metodo addCertification sull'istanza nurseOlynyk della classe Nurse

// console.log(nurseOlynyk.certifications); // risultato : ['Trauma', 'Pediatrics', 'Genetics']

// // METODI STATICI
//     // Delle volte si vorrà  che una classe abbia dei metodi che non sono disponibili nelle singole instanze, ma che puoi chiamare direttamente dalla classe!

// // RIASSUMIAMO

// // * le classi sono modelli per gli oggetti

// // * javascript chiama un metodo constructor() quando creiamo una nuova istanza di una classe.

// // * L'ereditarietà è quando creiamo una classe padre con proprieta e metodi che possiamo estendere ai figli

// // * quando utiliziamo la parola chiave extends creiamo una sottoclasse.

// // * la parola chiave super() richiama il constructor() della classe genitore

// // * i metodi statici vengono chiamati sulle classi, ma non sulle istanze della classe

// // ESERCITAZIONE // Creo una nuova classe di nome Doctor che sara inerente alla classe HospitalEmployee // proprieta: _name, _remainingVacationDays(settato a 20), _insurance // metodi: .takevacationDays

// class Doctor extends HospitalEmployee {
//   constructor(name, insurance) {
//     super(name);
//     this._insurance = insurance;
//   }
//   get insurance() { return this._insurance; }
// }

// const doctorRoberto = new Doctor('Roberto', 'NguaiatInsurance');

// doctorRoberto.takeVacationDays(15);
// console.log(doctorRoberto.remainingVacationDays);
// console.log(doctorRoberto.insurance);

// COSTRUIAMO UNA LIBRERIA

// class Media {
//   constructor(title) {
//     this._title = title;
//     this._isCheckedOut = false;
//     this._ratings = [];
//   }
//   get title() {
//     return this._title;
//   }
//   get isCheckedOut() {
//     return this._isCheckedOut;
//   }
//   get ratings() {
//     return this._ratings;
//   }

//   getAverageRating() {
//     let initialValue = 0;
//     let sum = this._ratings.reduce((a, b) => a + b, initialValue);
//     let mediaPonderata = sum / this._ratings.length;
//     return mediaPonderata;
//   }

//   toggleCheckOutStatus() {
//     return (this._isCheckedOut = !this._isCheckedOut);
//   }

//   addRating(rating) {
//     this._ratings.push(rating);
//   }
// }

// class Book extends Media {
//   constructor(title, author, pages) {
//     super(title);
//     this._author = author;
//     this._pages = pages;
//   }
//   get author() {
//     return this._author;
//   }
//   get pages() {
//     return this._pages;
//   }
// }

// class Movie extends Media {
//   constructor(title, director, runTime) {
//     super(title);
//     this._director = director;
//     this._runTime = runTime;
//   }
//   get director() {
//     return this._director;
//   }
//   get runTime() {
//     return this._runTime;
//   }
// }

// class CD extends Media {
//   constructor(title, artist, songs) {
//     super(title);
//     this._artist = artist;
//     this._songs = songs;
//   }
//   get artist() {
//     return this._artist;
//   }
//   get songs() {
//     return this._songs;
//   }

//   shuffle() { // la funzione shuffle prenderà l'array che si trova in songs e ne creerà uno nuovo con le canzoni mescolate.
//     var currentIndex = this._songs.length, temporaryValue, randomIndex;
//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = this._songs[currentIndex];
//       this._songs[currentIndex] = this._songs[randomIndex];
//       this.songs[randomIndex] = temporaryValue;
//     }
//     return this._songs;
//   }
// }

// const bellaCiao = new CD ('bellaCiao', 'Giacomo', ['il diavolo', 'la madre', 'vincere', 'troppo di noi', 'willy']);
// console.log(bellaCiao.songs);
// console.log(bellaCiao.shuffle())
// console.log(bellaCiao.shuffle())
// console.log(bellaCiao.shuffle())



// const historyOfEverything = new Book(
//   "History of Everything",
//   "Bill Bryson",
//   544
// );
// historyOfEverything.toggleCheckOutStatus();
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// historyOfEverything.getAverageRating();

// const speed = new Movie("speed", "Jan de Bont", 116);
// speed.toggleCheckOutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log(speed.getAverageRating());

// CATALOGO DELLA SCUOLA
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name () { return this._name; };
  get level () { return this._level; };
  get numberOfStudents () { return this._numberOfStudents; };

  set numberOfStudents (numberOfStudents) {
    
    if (typeof numberOfStudents == 'number') {
      this._numberOfStudents = numberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  quickFacts() {console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)};

  static pickSubstituteTeacher(substituteTeachers) {
    let randomIndex = Math.floor(Math.random() * substituteTeachers.length );
    return substituteTeachers[randomIndex];
  };
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() { return this._pickupPolicy; }
}
let lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
console.log(lorraineHansbury.numberOfStudents);
lorraineHansbury.quickFacts()
console.log(School.pickSubstituteTeacher( ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'] ));

class MiddleSchool extends School {
  constructor(name, numberOfStudents){
    super(name,'Middle', numberOfStudents);
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportTeams){
    super(name,'High', numberOfStudents);
    this._sportTeams = sportTeams;
    }
    get sportTeams() { console.log(this._sportTeams)}
}
let alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportTeams; 











