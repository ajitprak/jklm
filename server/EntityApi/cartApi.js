/**
 * Created by warlock on 14/05/16.
 */

var queryDefinition = {};

queryDefinition.getCartDetails = {
    'apiPath' : '/api/userCartDetails',
    'operation' : 'GET',
    'esOperation' : 'search',
    'queryName' : 'getCartDetails',
    'parameters' : {
        'index' : 'cart',
        'type' : 'cart_details',
        'body' : {
            '_source' : ['item_id','item_name','user_name','date_added'],
            'query' : {
                'filtered':{
                    'filter':{
                        'term' : {'user_name':'?'}
                    }
                }
            }
        }
    }
};

module.exports = queryDefinition;
