class Person{
    counter = 0;
    constructor(name, surname, age){
        this.Name = name;
        this.Surname = surname;
        this.Age= age;
        this.counter++;
    }
    set age(value){this.Age = value;}
    get age(){return this.Age;}
    set surname(value){this.Surname = value;}
    get surname(){return this.Surname;}
    set name(value){this.Name = value;}
    get name(){return this.Name;}

    ShowPerson()
    {console.log(this);}
}

class Flat{
    Persons = [];
    constructor(numberofflat, entrance, persons= []){
        this.NumberOfFlat = numberofflat;
        this.Pidizds = entrance;
        this.Persons = persons;
    }

    set numberofflat(value){this.NumberOfFlat = value;}
    get numberofflat(){return this.NumberOfFlat;}
    set entrance(value){this.Entrance = value;}
    get entrance(){return this.Entrance;}

    ShowFlat(){
        console.log(`In ${this.NumberOfFlat} - flat, ${this.Entrance} - entrance, live ${this.Persons.length} persons`);
    }
    pib(){
        console.log(this);
    }
}

class House{
    Flats = [50];
    Entrance = [6];
    constructor(flats = [],  numberofhouse){
        this.NumberOfHouse = numberofhouse;
        this.Flats = flats;
        this.Persons = flats.persons;
    }
    ShowHouse(){
        console.log(`Number of House - ${this.NumberOfHouse}, Count of Flats: ${this.Flats.length}`);
    }
    SHH(){
        console.log(this);
    }
}

Rostislave = new Person("Rostislave", "Gonchar", 16);
Oleg = new Person("Oleg", "Shumov", 17);
Voloodymir = new Person("Voloodymir", "Stoyanov", 15);
Anastasia = new Person("Anastasia", "Savraz", 12);
Dmytro = new Person("Dmytro", "Zebak", 11);
Victoria = new Person("Victoria", "Andrievska", 19);
Yaromur = new Person("Yaromur", "Yaschushun", 21);
Maksym = new Person("Maksym", "Tsvyk", 15);
Sofia = new Person("Sofia", "Vladuchunska", 16);

flat1 = new Flat(23,1,[Rostislave, Oleg, Voloodymir])
flat2 = new Flat(45,2,[Anastasia, Dmytro, Victoria])
flat3 = new Flat(61,3,[Sofia, Maksym, Yaromur])

house = new House([flat1,flat2,flat3],21);
flat1.ShowFlat();
flat1.pib();
flat2.ShowFlat();
flat2.pib();
flat3.ShowFlat();
flat3.pib();

house.ShowHouse();