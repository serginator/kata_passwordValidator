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

	it("al menos una letra", function() {
		expect(isValidPassword("1234")).toBe(false);
	});

	it("al menos dos letras con una mayúscula", function() {
		expect(isValidPassword("aa1234")).toBe(false);
	});

	it("al menos dos letras con una minuscula", function() {
		expect(isValidPassword("AA1234")).toBe(false);
	});
});

var validPassword = {
	validarLongitud: function(password){
		if (password.length > 4) {
			return true;
		}

		return false;
	},

	tieneAlMenosUnNumero: function(password){
		if (/\d/.test(password)) {
			return true;
		}

		return false;
	},

	tieneAlMenosUnaLetra: function(password){
		if(/[a-zA-Z]/i.test(password)) {
			return true;
		}

		return false;
	},

	tieneAlmenosUnaMayuscula: function(password){
		if(/[A-Z]/.test(password)) {
			return true;
		}

		return false;
	},

	tieneAlmenosUnaMinuscula: function(password){
		if(/[a-z]/.test(password)) {
			return true;
		}

		return false;
	}
};

var isValidPassword = function(password){
	if(validPassword.validarLongitud(password) &&
		validPassword.tieneAlMenosUnNumero(password) &&
		validPassword.tieneAlMenosUnaLetra(password) &&
		validPassword.tieneAlmenosUnaMayuscula(password) &&
		validPassword.tieneAlmenosUnaMinuscula(password)
		){
		return true;
	}else{
		return false;
	}
}



/*
var isValidPassword = function(password) {
	if (password.length < 4) {
		return false;
	} else {
		if (/\d/.test(password) && /[a-z]/i.test(password) && /[A-Z]/.test(password)) {
			return true;
		} else {
			return false;
		}
		return true;
	}
};*/