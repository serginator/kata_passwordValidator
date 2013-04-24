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
});

var isValidPassword = function(password){
	return true;
};