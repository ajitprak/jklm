var responder = {};

responder.sendResponse = function(data,res){
  res.send(data);  
};

module.exports = responder;


