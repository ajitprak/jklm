var queryDefinition = {};

queryDefinition.query = {
    'apiPath':'/api/mock',
    'operation': 'POST',
    'esOperation' : 'search',
    parameters:{
        'index' : 'mockIndex',
        'type' : 'mockType',
        'body' :{
            _source:["mockField1","mockField2","mockField3"],
            "query":{
                "filtered":{
                  "filter":{
                          "and":[
                          {
                            "term":{"mockField1":"?"}
                          },
                          {
                            "term":{"mockField2":"?"}
                          }
                      ]
                  }
                }
            }
        }
    }
    
};


module.exports = queryDefinition;


