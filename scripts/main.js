import { getEmployees } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getComputers } from "./computers/ComputerProvider.js";
import { getLocations } from "./locations/LocationProvider.js";
import { getDepartments } from "./departments/DepartmentProvider.js";

// Was never good with promises. I wonder why getEmployees() is invoked over the other the other two first.
getEmployees()
    .then(getLocations)
    .then(getDepartments)
    .then(getComputers)
    .then(EmployeeList)