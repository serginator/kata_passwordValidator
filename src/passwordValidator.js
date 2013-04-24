var validPassword = {
	validateLength: function(password) {
		if (password.length > 4) {
			return true;
		}
		return false;
	},

	hasAtLeastANumber: function(password) {
		if (/\d/.test(password)) {
			return true;
		}
		return false;
	},

	hasAtLeastACapitalLetter: function(password) {
		if (/[A-Z]/.test(password)) {
			return true;
		}
		return false;
	},

	hasAtLeastALowerCaseLetter: function(password) {
		if(/[a-z]/.test(password)) {
			return true;
		}
		return false;
	}
};

var isValidPassword = function(password) {
	if (validPassword.validateLength(password) &&
			validPassword.hasAtLeastANumber(password) &&
			validPassword.hasAtLeastACapitalLetter(password) &&
			validPassword.hasAtLeastALowerCaseLetter(password)) {
		return true;
	}
	return false;
};