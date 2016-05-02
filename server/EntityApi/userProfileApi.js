/**
 * Created by warlock on 27/04/16.
 */

var queryDefinition = {};

queryDefinition.getUserProfile = {
    'apiPath':'/api/userProfile',
    'operation': 'GET',
    'esOperation' : 'search',
    parameters:{
        'index' : 'user',
        'type' : 'userAllData',
        'body' :{
            _source:["userName","fullName","eMail","mobileNumber","DOB","address","city","state","currentOrder"],
            "query":{
                "filtered":{
                    "filter": {
                            "term":{"userName":"?"}
                        }
                }
            }
        }
    }

};

queryDefinition.getCartDetails = {
    'apiPath' : 'api/userCartDetails',
    'operation' : 'GET',
    'esOperation' : 'search',
    'parameters' : {
        'index' : 'cart',
        'type' : 'cart_details',
        'body' : {
            '_source' : ['item_id','item_name','userName','date_added'],
            'query' : {
                'filtered':{
                    'filter':{
                        'term' : {'userName':'?'}
                    }
                }
            }
        }
    }
};


module.exports = queryDefinition;