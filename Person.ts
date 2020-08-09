export interface Person {
    FirstName: string,
    Surname: string,
    Age: number
}

let person:Person = {
    FirstName: 'Ferdynad',
    Surname: 'Kiepski',
    Age: 50
}

function getFullName() {
    return person.FirstName + person.Surname
}

function makePersonOlder(years: number) {
    person.Age += years
}
