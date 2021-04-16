const Intern = require("../lib/Intern");

test("Set school via constructor", () => {
  const testValue = "SJU";
  const e = new Intern("Bug", 1, "email@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bug", 1, "email@email.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "SJU";
  const e = new Intern("Bug", 1, "email@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});