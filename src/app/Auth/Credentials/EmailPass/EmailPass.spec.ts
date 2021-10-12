import { describe, test, expect } from "@jest/globals";
import EmailPass from "./EmailPass";
import InvalidEmailAddress from "./Error/InvalidEmailAddress";

describe("EmailPass", () => {
  test("It throws an error if the email is invalid", () => {
    const invalid = "foo";
    expect(() => {
      new EmailPass(invalid, "bar")
    }).toThrow(
      InvalidEmailAddress.create(invalid)
    );
  });
});
