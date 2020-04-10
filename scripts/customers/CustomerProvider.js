let customers = []

export const useCustomers = () => customers.slice()


export const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(response => response.json())
        .then(
            (parsedCustomers) => {
                customers = parsedCustomers
            }
        )
}