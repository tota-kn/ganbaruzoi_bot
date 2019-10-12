"use strict";
exports.__esModule = true;
var _ = require("lodash");
var fs = require('fs');
var csv = require('csv');
var csvSync = require('csv-parse/lib/sync');
function getCsv(file) {
    var data = fs.readFileSync(file);
    return csvSync(data);
}
module.exports = function (robot) {
    robot.respond(/今日も一日/i, function (msg) {
        msg.reply("がんばるぞい!");
        var data = getCsv(__dirname + '/../imageUrl.csv');
        var imageUrl = _.sample(data)[0];
        msg.reply(imageUrl);
    });
};
