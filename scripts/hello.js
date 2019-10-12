"use strict";
exports.__esModule = true;
module.exports = function (robot) {
    robot.respond(/今日も一日/i, function (msg) {
        msg.reply("がんばるぞい!");
    });
};
