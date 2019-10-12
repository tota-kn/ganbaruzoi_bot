const _ = require('lodash');
const fs = require('fs');
const csvSync = require('csv-parse/lib/sync');
const cronJob = require('cron').CronJob

function getCsv(file) {
  const data = fs.readFileSync(file);
  return csvSync(data);
}

function replyImage(file) {
  const data = getCsv(file);
  return _.sample(data)[0];
}

module.exports = (robot) => {
  const ImageUrl = replyImage(__dirname + '/../imageUrl.csv');
  const room = 'CNGCPR71Q';

  const send = (room, msg) => {
    robot.send({ room: room }, msg);
  }

  robot.hear(/今日も一日/i, (msg) => {
    msg.reply(ImageUrl);
    console.log(`respond: ${ImageUrl}`)
  });

  new cronJob('0 0 10 * * 0-5', () => {
    send(room, '今日も一日\n' + ImageUrl)
    console.log(`cron: ${ImageUrl}`)
  }, null, true, 'Asia/Tokyo');
}