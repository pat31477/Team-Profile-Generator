const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office number set via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Bug", 1, "email@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Bug", 1, "email@email.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Office number set via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Bug", 1, "email@email.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});