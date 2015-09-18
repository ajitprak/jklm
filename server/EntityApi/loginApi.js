var queryDefinition = {};

queryDefinition.login = {
    'apiPath':'/api/login',
    'operation': 'POST',
    'esOperation' : 'search',
    parameters:{
        'index' : 'user',
        'type' : 'userAllData',
        'body' :{
            _source:["userName","password","fullName"],
            "query":{
                "filtered":{
                  "filter":{
                          "and":[
                          {
                            "term":{"userName":"?"}
                          },
                          {
                            "term":{"password":"?"}
                          }
                      ]
                  }
                }
            }
        }
    }
    
};


module.exports = queryDefinition;
        