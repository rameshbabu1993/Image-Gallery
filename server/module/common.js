// Common module to hold utility methods.

var CommonConstant = require('../constants/responsecontant');

// send success reponse to client
module.exports.sendSuccessResponse = function(res, content) {
    res.statusCode = CommonConstant.SUCCESS_RESPONSE;
    res.setHeader("content-type", CommonConstant.RESPONSE_TYPE_JSON);
    res.json(content);
}

// send failure reponse to client
module.exports.sendBadReqResponse = function(res, content) {
    res.statusCode = CommonConstant.BAD_RESPONSE;
    res.setHeader("content-type", CommonConstant.RESPONSE_TYPE_JSON);
    res.json(content);
}

// send internal error reponse to client
module.exports.sendInternalServErrorResponse = function(res, content) {
    res.statusCode = CommonConstant.INETERNAL_ERROR_RESPONSE;
    res.setHeader("content-type", CommonConstant.RESPONSE_TYPE_JSON);
    res.json(content);
}
