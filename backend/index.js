const moment = require('moment')
const simpleGit = require('simple-git')
const DATE = moment().format();

simpleGit().commit("testFiles",{'--date' : DATE})