/**
 * Al menos 4 carácteres
 * Al menos un número y una letra
 * Al menos una minúscula
 * Al menos una mayúscula
 */

describe("password test", function() {
	it("no cumple la longitud mínima de seguridad", function() {
		expect(isValidPassword("123")).toBe(false);
	});

	it("cumple la longitud mínima de seguridad", function() {
		expect(isValidPassword("123233Aa")).toBe(true);
	});

	it("al menos un número", function() {
		expect(isValidPassword("abcddfdf")).toBe(false);
	});

	it("al menos dos letras con una mayúscula", function() {
		expect(isValidPassword("aa1234")).toBe(false);
	});

	it("al menos dos letras con una minuscula", function() {
		expect(isValidPassword("AA1234")).toBe(false);
	});
});
