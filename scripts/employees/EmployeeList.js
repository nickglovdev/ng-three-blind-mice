import { useEmployees } from "./EmployeeProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerProvider.js";

const contentTarget = document.querySelector(".employeesContainer")

// names the function render
const render = employeesToRender => {
    // placing the variable computers equal to the array of useComputers?
    const computers = useComputers()
    // map over employeesToRender and then try to find the matching computer?
    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            // Two returns? One for the HTML and the other 
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}