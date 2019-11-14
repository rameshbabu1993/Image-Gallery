var common = require('./common');
var Flickr = require('flickr-sdk');

var getFeed = function(req, res, next) {
    try{
        // initialize filckr feed.
        var feeds = new Flickr.Feeds();

        // fetch public feed with tags provided.
        feeds.publicPhotos({format: "json",tags: req.params.tags})
        .then(function(resp){
            common.sendSuccessResponse(res, resp.body.items);
        })      
    } catch (err){
        common.sendInternalServErrorResponse(res, "Internal server error, Check with admin ");
    }
};

module.exports = getFeed;