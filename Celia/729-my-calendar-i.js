const { expect } = require('chai');

/*
729. My Calendar I

LEETCODE MEDIUM

https://leetcode.com/problems/my-calendar-i/

Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
*/

var MyCalendar = function() {
   
};

MyCalendar.prototype.book = function(start, end) {

}

describe('MyCalendar', () => {

    let calendarInstance = new MyCalendar()

    it('Test case 1', () => {
        expect(calendarInstance.book(10, 20)).to.equal(true);
    });
    it('Test case 2', () => {
        expect(calendarInstance.book(15, 25)).to.equal(false);
    });
    it('Test case 3', () => {
        expect(calendarInstance.book(20, 30)).to.equal(true);
    });
}); 