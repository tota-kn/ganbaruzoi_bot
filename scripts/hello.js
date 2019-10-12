"use strict";
exports.__esModule = true;
module.exports = function (robot) {
    robot.respond(/今日も一日/i, function (msg) {
        msg.reply("がんばるぞい!");
        var imageUrl = "https://gyazo.com/8e9f54cdb2b5b9ad4d646c49ee62c5eb";
        msg.reply(imageUrl);
    });
};
