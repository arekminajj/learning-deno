import { Person } from "../Person.ts"

export let person:Person = {
    FirstName: 'Ferdynad',
    Surname: 'Kiepski',
    Age: 50
}

export function getFullName() {
    return person.FirstName + ' ' + person.Surname
}

export function makePersonOlder(years: number) {
    person.Age += years
}