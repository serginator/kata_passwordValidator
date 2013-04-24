var validPassword = {
	validarLongitud: function(password) {
		if (password.length > 4) {
			return true;
		}
		return false;
	},

	tieneAlMenosUnNumero: function(password) {
		if (/\d/.test(password)) {
			return true;
		}
		return false;
	},

	tieneAlmenosUnaMayuscula: function(password) {
		if (/[A-Z]/.test(password)) {
			return true;
		}
		return false;
	},

	tieneAlmenosUnaMinuscula: function(password) {
		if(/[a-z]/.test(password)) {
			return true;
		}
		return false;
	}
};

var isValidPassword = function(password) {
	if (validPassword.validarLongitud(password) &&
			validPassword.tieneAlMenosUnNumero(password) &&
			validPassword.tieneAlmenosUnaMayuscula(password) &&
			validPassword.tieneAlmenosUnaMinuscula(password)) {
		return true;
	}
	return false;
};