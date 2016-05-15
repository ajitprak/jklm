/**
 * Created by warlock on 27/04/16.
 */

var queryDefinition = {};

queryDefinition.getUserProfile = {
    'apiPath':'/api/userProfile',
    'operation': 'GET',
    'esOperation' : 'search',
    'queryName' : 'getUserProfile',
    parameters:{
        'index' : 'user',
        'type' : 'user_all_data',
        'body' :{
            _source:["user_name","full_name","email","mobile_number","dob","address","city","state","current_orders"],
            "query":{
                "filtered":{
                    "filter": {
                            "term":{"user_name":"?"}
                        }
                }
            }
        }
    }

};


module.exports = queryDefinition;