import { Developer } from "./developer";

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer("Michel", 10, "Français")).toBeTruthy();
  });
});
