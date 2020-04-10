// When is a good time to know that I'll need two or more paramaters: When you have two or more DataProviders 
export const Employee = (employeeObject, computerObject, departmentObject, locationObject) => {
    return `
        <section class="employee">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>Age: ${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
            <div class="employee__department">
                Works in the ${departmentObject.name} department
            </div>
            <div class="employee__location">
                Works in the ${locationObject.city} location
            </div>
        </section>
    `
} 