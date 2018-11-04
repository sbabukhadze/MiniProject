class Person {
    constructor(first_name, last_name, personal_no, mid_name, birth_date) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.middleName = mid_name;
        this.personalNo = personal_no;
        this.birthDate = birth_date;
        // this.car = car;
    }
}

let personDb = [
    new Person('Ana', 'Jobava', '12345678911', 'Davit', '22/09/1988'),
    new Person('Levan', 'Kvaratskhelia', '12345678912', 'Akaki', '12/09/1982'),
    new Person('Nika', 'Kapanadze', '12345678910', 'Giorgi', '10/10/1987')
];

module.exports = Person;
module.exports = personDb;