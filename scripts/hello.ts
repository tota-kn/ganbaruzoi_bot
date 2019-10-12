import hubot = require("hubot");
import _ = require("lodash");

const fs = require('fs');
const csvSync = require('csv-parse/lib/sync');

function getCsv(file): Object {
    const data = fs.readFileSync(file);
    return csvSync(data);
}

module.exports = (robot: hubot.Robot<any>): void => {
    robot.respond(/今日も一日/i, (msg: hubot.Response<any>) => {
        const data = getCsv(__dirname + '/../imageUrl.csv');
        const imageUrl = _.sample(data)[0];
        msg.reply(imageUrl);
    });
};