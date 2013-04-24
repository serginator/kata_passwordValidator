/**
 * Al menos 4 carácteres
 * Al menos un número y una letra
 * Al menos una minúscula
 * Al menos una mayúscula
 */

describe("test", function(){
	it("longitud minima de seguridad", function(){
		expect(isValidPassword("1234567jjkh")).toBe(true);
	});

	it("no cumple la longitud mínima de seguridad", function() {
		expect(isValidPassword("123")).toBe(false);
	});
});

var isValidPassword = function(password){
	if (password.length < 4) {
		return false;
	}
	return true;
};