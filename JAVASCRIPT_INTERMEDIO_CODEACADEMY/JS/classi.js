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

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() { return this._title; };
  get isCheckedOut() { return this._isCheckedOut; };
  get ratings () { return this._ratings; }

  getAverageRating() {
    let initialValue = 0;
    let sum = this._ratings.reduce((a, b) => a + b, initialValue)
    let mediaPonderata = (sum / this._ratings.length);
    return mediaPonderata;
  };

  toggleCheckOutStatus(){ return this._isCheckedOut = !this._isCheckedOut; };

  addRating(rating) {this._ratings.push(rating);};
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author () { return this._author; };
  get pages () { return this._pages; };
}

class Film extends Media {
  constructor (title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director () { return this._director; };
  get runTime () { return this._runTime; };
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist () { return this._artist; };
  get songs () { return this._songs; };
}














