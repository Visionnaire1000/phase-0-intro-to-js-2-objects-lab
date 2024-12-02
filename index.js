
// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update an employee object without mutating it
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update an employee object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee object without mutating it
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage
  let newEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log(newEmployee); // { name: 'John Doe', streetAddress: '123 Main St', position: 'Manager' }
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(employee); // { name: 'John Doe', streetAddress: '456 Elm St' }
  
  let updatedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log(updatedEmployee); // { streetAddress: '456 Elm St' }
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employee); // { name: 'John Doe' }
  
