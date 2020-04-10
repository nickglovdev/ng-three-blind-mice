import { useEmployees } from "./EmployeeProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerProvider.js";
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useLocations } from "../locations/LocationProvider.js";

const contentTarget = document.querySelector(".employeesContainer")

// names the function render
const render = employeesToRender => {
    // placing the variable computers equal to the array of useComputers?
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    // map over employeesToRender and then try to find the matching computer?
    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find( computer => computer.id === employeeObject.computerId )

            // Find the related department for the current employee
            const foundDepartment = departments.find( department => department.id === employeeObject.departmentId )

            // Find the related location for the current employee
            const foundLocation = locations.find( location => location.id === employeeObject.locationId )


            // Two returns? One for the HTML and the other: All for the html
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}