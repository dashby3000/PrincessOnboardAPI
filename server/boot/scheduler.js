'use strict';

module.exports = function(app, cb) {
  var schedule = require('node-schedule');

  for (var i = 0; i < app.get('scheduler').deleteAtMinPastHour.length; i++) {
    var rule = new schedule.RecurrenceRule();
    rule.minute = app.get('scheduler').deleteAtMinPastHour[i];

    console.log('Setting up Delete Image Scheduler for \'' + rule.minute + '\' past the hour.');

    var j = schedule.scheduleJob(rule, function() {
      var Photo = app.models.Photo;

      Photo.cleanUp('images', app.get('scheduler').deleteFilesOlderThanMin);
    });
  }

  cb();
};
