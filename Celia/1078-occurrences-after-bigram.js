const { expect } = require('chai');

/*
1078. Occurrences After Bigram

LEETCODE EASY

https://leetcode.com/problems/occurrences-after-bigram/

Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.
*/

var findOcurrences = function(text, first, second) {

}

describe('findOcurrences', () => {
    it('Test case 1', () => {
        expect(findOcurrences("alice is a good girl she is a good student", "a", "good")).to.deep.equal(["girl","student"]);
    });
    it('Test case 2', () => {
        expect(findOcurrences("we will we will rock you", "we", "will")).to.deep.equal(["we","rock"]);
    });
}); 
