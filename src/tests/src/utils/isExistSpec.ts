import isExist from "../../../utils/isExist";

describe("isExist function", () => {
  it("should give output of true", () => {
    expect(isExist("../../inputs/cat.jpg")).toBeTruthy();
  });

  it("should give output of false", () => {
    expect(isExist("../../inputs/anything.jpg")).toBeFalsy();
  });
});
