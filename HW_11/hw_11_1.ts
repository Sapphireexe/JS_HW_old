export{}
/*
1. Создайте interface ItEmployee
2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
6. В интерфейсе ItEmployee сделайте поле grade типа Grade
7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)
12. Создайте объект с типом ItEmployee
*/

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    address?: IAddress;
    projectNames: string[];
}

type Grade = 'junior' | 'middle' | 'senior' | 'lead';

enum OCCUPATION {
    DEVELOPER = "Developer",
    QA = "Tester",
    AQA = "Automation QA",
    PM = "Project Manager",
    DEVOPS = "DevOps",
}

interface IAddress {
    country: 'BELARUS' | 'POLAND' | 'UKRAINE' | 'RUSSIA';
    street: string;
    house: number;
    flat: number;
}

const itSpecialist: ItEmployee = {
    name: 'Anatoly',
    surname: 'Obukhov',
    salary: 1000,
    grade: 'junior',
    occupation: OCCUPATION.QA,
    address: {
        country: 'RUSSIA',
        street: 'Gagarina',
        house: 5,
        flat: 10,
    },
    projectNames: ['AQA', 'HomeWorks']
}

console.log(itSpecialist);