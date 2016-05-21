/**
 * Created by warlock on 21/05/16.
 */

var user = {};

user.userAllData = [
    {
    'index' : 'user',
    'type' : 'user_all_data',
    'body' : {
        'user_name':'ajiprak',
        'password':'subhashini',
        'full_name':'Ajith Prakash T',
        'email':'ajiprak@gmail.com',
        'mobile_number':'9008617577',
        'doj':'2015-08-04T00:38:00',
        'dob':'1987-05-31T00:00:00',
        'address':'8,Main Road, Villukury, 629180',
        'city':'Nagercoil',
        'state':'TN',
        'security_question' : 1,
        'answer':'Ranger',
        'current_orders':[
            {
                'order_id':'ORD000001',
                'order_description':'Moto G second Gen',
                'order_date':'2015-08-04T00:38:00'
            }
        ]
    }
},
    {
        'index' : 'user',
        'type' : 'user_all_data',
        'body' : {
            'user_name':'subhav',
            'password':'ajith',
            'full_name':'Subhashini Velu',
            'email':'subha@gmail.com',
            'mobile_number':'94875288657',
            'doj':'2016-05-21T00:38:00',
            'dob':'1987-06-11T00:00:00',
            'address':'8,Main Road, Villukury, 629180',
            'city':'Nagercoil',
            'state':'TN',
            'security_question' : 1,
            'answer':'Ranger',
            'current_orders':[
                {
                    'order_id':'ORD000001',
                    'order_description':'Moto E',
                    'order_date':'2016-05-21T09:38:00'
                }
            ]
        }
    }
];

module.exports = user;
