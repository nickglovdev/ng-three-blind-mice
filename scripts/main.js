import { getEmployees } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getComputers } from "./computers/ComputerProvider.js";

// Was never good with promises. I wonder why getEmployees() is invoked over the other the other two.
getEmployees()
    .then(getComputers)
    .then(EmployeeList)