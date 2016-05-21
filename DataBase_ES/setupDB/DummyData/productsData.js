/**
 * Created by warlock on 21/05/16.
 */

var products = {};

products.inventory = [
    {
        'index' : 'products',
        'type' : 'items_inventory',
        'body' : {
            "item_id":"500001",
            "item_name":"Iphone",
            "date_added":"2016-04-27T20:38:00",
            "date_modified":"2016-05-12T15:38:00",
            "modified_by":"subhav",
            "price":12999.99,
            "size":0,
            "category":"Electronics",
            "sub_category":"Mobiles",
            "type":"White",
            "image_location":"/Electronics/Mobiles/White/",
            "stock_status":"true",
            "star_rating":4.23,
            "count_available":5
        }
    }
];

products.sold = [
    {
        'index' : 'products',
        'type' : 'items_sold',
        'body' : {
            "item_id":"500002",
            "item_name":"One plus",
            "price":7777.99,
            "size":0,
            "category":"Electronics",
            "sub_category":"Mobile",
            "type":"Black",
            "date_sold":"2016-05-11T15:38:00",
            "date_modified":"2016-05-11T15:38:00",
            "user_name":"ajiprak",
            "image_location":"/Electronics/Mobiles/White/",
            "order_id":"ORD000002",
            "city":"Nagercoil",
            "state":"TN",
            "is_cancelled":false,
            "cancellation_date":"1970-01-01T00:00:00"
        }
    }
];

products.history = [
    {
        'index' : 'products',
        'type' : 'items_history',
        'body' : {
            "item_id":"500003",
            "item_name":"Micromax Carbon",
            "price":9999.99,
            "size":0,
            "category":"Electronics",
            "sub_category":"Mobile",
            "type":"Black",
            "date_sold":"2015-09-11T15:38:00",
            "date_modified":"2016-05-11T15:38:00",
            "user_name":"ajiprak",
            "image_location":"/Electronics/Mobiles/White/",
            "order_id":"ORD000003",
            "city":"Nagercoil",
            "state":"TN",
            "is_cancelled":false,
            "cancellation_date":"1970-01-01T00:00:00"
        }
    }
];

module.exports = products;