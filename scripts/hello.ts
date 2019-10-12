import hubot = require("hubot");

module.exports = (robot: hubot.Robot<any>): void => {
    robot.respond(/今日も一日/i, (msg: hubot.Response<any>) => {
        msg.reply("がんばるぞい!");
    });
};