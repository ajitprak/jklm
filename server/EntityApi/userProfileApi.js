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


module.exports = queryDefinition;