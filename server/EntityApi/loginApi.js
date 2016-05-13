var queryDefinition = {};

queryDefinition.login = {
    'apiPath':'/api/loginuser',
    'operation': 'POST',
    'esOperation' : 'search',
    'queryName' : 'login',
    parameters:{
        'index' : 'user',
        'type' : 'user_all_data',
        'body' :{
            _source:["user_name","full_name"],
            "query":{
                "filtered":{
                  "filter":{
                          "and":[
                          {
                            "term":{"user_name":"?"}
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
        