import hubot = require("hubot");

module.exports = (robot: hubot.Robot<any>): void => {
    robot.respond(/今日も一日/i, (msg: hubot.Response<any>) => {
        msg.reply("がんばるぞい!");
        const imageUrl = "https://gyazo.com/8e9f54cdb2b5b9ad4d646c49ee62c5eb";
        msg.reply(imageUrl);
    });
};