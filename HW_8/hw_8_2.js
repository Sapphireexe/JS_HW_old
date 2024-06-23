'use strict';

/*
Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
*/

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]

/*
Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/
console.log(`Task 1\n`);

const getTotalEmployeesCount = enterprise => {
  let counter = 0;
  for (const department of enterprise.departments) {
    counter += department.employees_count;
  }
  return counter ? counter : `нет`;
}

const getCorrectPeopleEnding = departmentOrEnterprise => {
  let employeesNumber;
  if (departmentOrEnterprise.hasOwnProperty('employees_count')) {
    employeesNumber = departmentOrEnterprise.employees_count;
  } else {
    employeesNumber = getTotalEmployeesCount(departmentOrEnterprise);
  }

  if (/1$/.test(String(employeesNumber)) && employeesNumber !== 11) {
    return departmentOrEnterprise.name !== "Администрация" ? `сотрудник` : `человек`;
  } else if (/[2-4]$/.test(String(employeesNumber)) && !(/1[2-4]$/.test(String(employeesNumber)))) {
    return departmentOrEnterprise.name !== "Администрация" ? `сотрудника` : `человека`;
  } else {
    return departmentOrEnterprise.name !== "Администрация" ? `сотрудников` : `человек`;
  }
}

const getCompanyStructure = enterprisesArray => {
  enterprisesArray.forEach((enterprise) => {
    console.log(`${enterprise.name} (${getTotalEmployeesCount(enterprise)} ${getCorrectPeopleEnding(enterprise)})`);
    for (const department of enterprise.departments) {
      console.log(`- ${department.name} (${department.employees_count ? department.employees_count : `нет`} ${getCorrectPeopleEnding(department)})`);
    }
  });
}
  
getCompanyStructure(enterprises);

/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2
*/
console.log(`\nTask 2\n`);

function getEnterpriseName (deptIdOrDeptName) {
  const enterpriseName = searchEnterpriseName(deptIdOrDeptName);

  const enterpriseNames = [];
  for (const enterprise of enterpriseName) {
    enterpriseNames.push(enterprise.name);
  }
  return enterpriseNames.join(` и `);
}

const searchEnterpriseName = deptIdOrDeptName => {
  const foundArray = enterprises.filter(enterprise => enterprise.departments.find(department => department.name === deptIdOrDeptName || department.id === deptIdOrDeptName));
  if (foundArray.length === 0) {
    throw new Error (`No such enterprise with this search string '${deptIdOrDeptName}'.`);
  }
  return foundArray;
}

console.log(getEnterpriseName(4));
console.log(getEnterpriseName("Отдел маркетинга"));

/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/

console.log(`\nTask 3\n`);

function addEnterprise (name) {
  enterprises.push({
    id: getMaxId() + 1,
    name,
    departments: []
  });
  console.log(`Добавлено новое предприятие '${name}' с id ${getMaxId()}.`);
}

const getMaxId = () => {
  let maxId = 0;
  for (const enterprise of enterprises) {
    if (maxId < enterprise.id) {
      maxId = enterprise.id;
    }
    for (const department of enterprise.departments) {
      if (maxId < department.id) {
        maxId = department.id;
      }
    }
  }
  return maxId;
}

addEnterprise("Предприятие 4");

/*
4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/

console.log(`\nTask 4\n`);

function addDepartment (id, name) {
  const index = getEnterpriseIndex(id);
  const enterpriseName = enterprises[index].name;
  enterprises[index].departments.push({
          id: getMaxId() + 1,
          name,
          employees_count: 0
        });
  console.log(`Добавлен новый отдел '${name}' с id ${getMaxId()} в предприятие '${enterpriseName}' с id ${id}.`);
}

const getEnterpriseIndex = idOrName => {
  const index = enterprises.findIndex((enterprise) => enterprise.id === idOrName || enterprise.name === idOrName);
  if (index === -1) {
    throw new Error (`No such enterprise with id ${idOrName}.`);
  }
  return index;
}

addDepartment(1, "Отдел снабжения печеньками и кофе");

/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

Пример:
editEnterprise(1, "Новое название предприятия")
*/

console.log(`\nTask 5\n`);

function editEnterprise (id, newName) {
  const index = getEnterpriseIndex(id);
  const oldName = enterprises[index].name;
  enterprises[index].name = newName;
  console.log(`Изменено название предприятия с id ${id} c '${oldName}' на '${newName}'.`);
}

editEnterprise(1, "Майкрософт");

/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/

console.log(`\nTask 6\n`);

function editDepartment (id, newName) {
  const [enterpriseIndex, departmentIndex] = getDepartmentIndex(id);
  let oldName = enterprises[enterpriseIndex].departments[departmentIndex].name;
  enterprises[enterpriseIndex].departments[departmentIndex].name = newName;
  console.log(`Изменено название отдела с id ${id} c '${oldName}' на '${newName}'.`);
}

const getDepartmentIndex = idOrName => {
  const enterpriseIndex = enterprises.findIndex(enterprise => enterprise.departments.find(department => department.id === idOrName || department.name === idOrName));
  if (enterpriseIndex === -1) {
    throw new Error (`No such department with id ${idOrName}.`);
  }
  const departmentIndex = enterprises[enterpriseIndex].departments.findIndex(department => department.id === idOrName || department.name === idOrName);

  return [enterpriseIndex, departmentIndex];
}

editDepartment(7, "Отдел уничтожения печенек и кофе");

/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/

console.log(`\nTask 7\n`);

function deleteEnterprise (id) {
  const index = getEnterpriseIndex(id);
  const enterpriseName = enterprises[index].name;
  enterprises.splice(index, 1);
  console.log(`Удалено предприятие с именем '${enterpriseName}' и id ${id}.`);
}

deleteEnterprise(1);

/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)
*/

console.log(`\nTask 8\n`);

function deleteDepartment (id) {
  const [enterpriseIndex, departmentIndex] = getDepartmentIndex(id);
  const departmentName = enterprises[enterpriseIndex].departments[departmentIndex].name;
  enterprises[enterpriseIndex].departments.splice(departmentIndex, 1);
  console.log(`Удалён отдел с именем '${departmentName}' и id ${id}.`);
}

deleteDepartment(7);

/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)

*/

console.log(`\nTask 9\n`);

function moveEmployees (fromId, toId) {
  const [enterpriseIndex1, departmentIndex1] = getDepartmentIndex(fromId);
  const [enterpriseIndex2, departmentIndex2] = getDepartmentIndex(toId);
  isSameEnterprise(enterpriseIndex1, fromId, enterpriseIndex2, toId);
  enterprises[enterpriseIndex2].departments[departmentIndex2].employees_count += enterprises[enterpriseIndex1].departments[departmentIndex1].employees_count;
  enterprises[enterpriseIndex1].departments[departmentIndex1].employees_count = 0;
  console.log(`Все сотрудники были перемещены из отдела '${enterprises[enterpriseIndex1].departments[departmentIndex1].name}' с id ${fromId} в отдел '${enterprises[enterpriseIndex2].departments[departmentIndex2].name}' с id ${toId}.`);
}

const isSameEnterprise = (enterpriseIndex1, fromId, enterpriseIndex2, toId) => {
  if (enterpriseIndex1 !== enterpriseIndex2) {
    throw new Error (`Department with id ${fromId} is different enterprise with department with id ${toId}.`);
  }
}

moveEmployees(6, 8);