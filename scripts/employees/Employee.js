/* When is a good time to know that I'll need two or more paramaters? 
Is it based of that I know there will be more than one object? */
export const Employee = (employeeObject, computerObject) => {
    return `
        <section class="employee">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
        </section>
    `
} 