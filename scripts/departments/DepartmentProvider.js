let departments = []

export const useDepartments = () => departments.slice()


export const getDepartments = () => {
    return fetch("http://localhost:8088/departments")
        .then(response => response.json())
        .then(
            (parsedDepartments) => {
                departments = parsedDepartments
            }
        )
}