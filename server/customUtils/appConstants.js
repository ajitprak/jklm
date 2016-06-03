var appConstants = {};

appConstants.QUERY_PARAM_IN = "?";
//appConstants.users = {};//Remove after redis implementation
appConstants.paramMapDb =  {
	    'getUserProfile' : {'user_name' : 'userName'},
	    'getCartDetails' : {'user_name' : 'userName'},
	    'login' : {'user_name' : 'userName','password':'password'},
	    'getSoldItemsForUser': {'user_name' : 'userName'}
	};

module.exports = appConstants;


