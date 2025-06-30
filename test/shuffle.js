import { expect } from "chai";
import { shuffle } from '../starter/src/shuffle.js';


describe("shuffle function", () => {
  it("should reorder the array elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    expect(shuffled).to.have.members(arr);
    expect(shuffled).to.not.deep.equal(arr); 
  });
});
