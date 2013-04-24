/**
 * Al menos 4 carácteres
 * Al menos un número y una letra
 * Al menos una minúscula
 * Al menos una mayúscula
 */

describe("test", function() {
	/*it("cumple la longitud minima de seguridad", function() {
		expect(isValidPassword("1234567")).toBe(true);
	});*/

	it("no cumple la longitud mínima de seguridad", function() {
		expect(isValidPassword("123")).toBe(false);
	});

	it("al menos un número", function() {
		expect(isValidPassword("abcddfdf")).toBe(false);
		//expect(isValidPassword("a4bcddfdf")).toBe(true);
	});

	it("al menos una letra", function() {
		expect(isValidPassword("1234")).toBe(false);
	});

	it("al menos dos letras con una mayúscula", function() {
		expect(isValidPassword("aa1234")).toBe(false);
	});
});

var isValidPassword = function(password) {
	if (password.length < 4) {
		return false;
	} else {
		if (/\d/.test(password) && /[a-z]/i.test(password)) {
			return true;
		} else {
			return false;
		}
		return true;
	}
};