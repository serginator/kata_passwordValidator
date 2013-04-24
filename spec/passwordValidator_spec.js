/**
 * At least a length of four.
 * At least a number and a letter.
 * At least a lower case letter.
 * At least a capital letter.
 */

describe("password test", function() {
	it("doesn't reach the minimum security length", function() {
		expect(isValidPassword("123")).toBe(false);
	});

	it("reach the minimum security length", function() {
		expect(isValidPassword("123233Aa")).toBe(true);
	});

	it("at least a number", function() {
		expect(isValidPassword("abcddfdf")).toBe(false);
	});

	it("at least two letters with a capital letter", function() {
		expect(isValidPassword("aa1234")).toBe(false);
	});

	it("at least two letters with a lower case letter", function() {
		expect(isValidPassword("AA1234")).toBe(false);
	});
});
