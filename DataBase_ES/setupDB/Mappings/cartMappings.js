/**
 * Created by warlock on 21/05/16.
 */

var cart = {};

cart.cartItems = {
    "index" : "cart",
    "type" : "cart_details",
    "body" : {
        "properties": {
            "item_id": {"type": "string"},
            "item_name": {"type": "string"},
            "user_name": {"type": "string"},
            "date_added": {"type": "date"}
        }
    }
};

module.exports = cart;
