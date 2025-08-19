import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee("Bouboule", 80000000)).toBeTruthy();
  });
});
