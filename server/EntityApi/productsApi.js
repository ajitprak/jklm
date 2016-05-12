/**
 * Created by warlock on 12/05/16.
 */

var queryDefinition = {};

queryDefinition.getSoldItemsForUser = {
    'apiPath' : 'api/getSoldItemsForUser',
    'operation' : 'GET',
    'esOperation' : 'search',
    'parameters': {
        'index': 'products',
        'type' : 'items_sold',
        'body' :{
            '_source' : ["item_id", "item_name", "price", "size", "category", "sub_category", "type", "date_sold",
                "user_id", "image_location", "order_id","city", "state", "is_cancelled", "cancellation_date"],
            'query':{
                'term': {'user_id': '?'}
            }
        }
    }
};

module.exports = queryDefinition;

