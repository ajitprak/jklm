/**
 * Created by warlock on 21/05/16.
 */


var user = {};
user.userAllData = {
    index: 'user',
    type: "user_all_data",
    body: {
        properties: {
            "user_name":{"type":"string"},
            "password":{"type":"string"},
            "fullName":{"type": "string",
                "fields": {
                    "raw": {"type" : "string", "index" : "not_analyzed"}
                }
            },
            "email":{"type":"string"},
            "mobile_number":{"type":"string"},
            "doj":{"type":"date"},
            "dob":{"type":"date"},
            "address":{"type":"string"},
            "city":{"type":"string"},
            "state":{"type":"string"},
            "security_question" : {"type":"integer"},
            "answer":{"type":"string","index" : "not_analyzed"},
            "current_orders":{
                "properties":{
                    "order_id":{"type":"string"},
                    "order_description":{"type":"string"},
                    "order_date":{"type":"date"}
                }
            }
        }
    }
};

module.exports = user;
