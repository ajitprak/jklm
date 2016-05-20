/**
 * Created by warlock on 21/05/16.
 */


var products = {};

products.inventory = {
    "index" : "products",
    "type" : "items_inventory",
    "body" : {
        "properties":{
            "item_id":{"type":"string"},
            "item_name":{"type":"string"},
            "date_added":{"type":"date"},
            "date_modified":{"type":"date"},
            "modified_by":{"type":"string"},
            "price":{"type":"float"},
            "size":{"type":"integer"},
            "category":{"type":"string"},
            "sub_category":{"type":"string"},
            "type":{"type":"string"},
            "image_location":{"type":"string"},
            "stock_status":{"type":"boolean"},
            "star_rating":{"type":"float"},
            "count_available":{"type":"integer"}
        }
    }
};

products.sold = {
    "index" : "products",
    "type" : "items_sold",
    "body" : {
        "properties":{
            "item_id":{"type":"string"},
            "item_name":{"type":"string"},
            "price":{"type":"float"},
            "size":{"type":"integer"},
            "category":{"type":"string"},
            "sub_category":{"type":"string"},
            "type":{"type":"string"},
            "date_sold":{"type":"date"},
            "date_modified":{"type":"date"},
            "user_name":{"type":"string"},
            "image_location":{"type":"string"},
            "order_id":{"type":"string"},
            "city":{"type":"string"},
            "state":{"type":"string"},
            "is_cancelled":{"type":"boolean"},
            "cancellation_date":{"type":"date"}
        }
    }
};

products.history = {
    "index" : "products",
    "type" : "items_history",
    "body" : {
        "properties":{
            "item_id":{"type":"string"},
            "item_name":{"type":"string"},
            "price":{"type":"float"},
            "size":{"type":"integer"},
            "category":{"type":"string"},
            "sub_category":{"type":"string"},
            "type":{"type":"string"},
            "date_sold":{"type":"date"},
            "date_modified":{"type":"date"},
            "user_name":{"type":"string"},
            "image_location":{"type":"string"},
            "order_id":{"type":"string"},
            "city":{"type":"string"},
            "state":{"type":"string"},
            "is_cancelled":{"type":"boolean"},
            "cancellation_date":{"type":"date"}
        }
    }
};



module.exports = products;