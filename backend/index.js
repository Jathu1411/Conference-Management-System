const moment = require('moment')
const simpleGit = require('simple-git')
const DATE = moment().subtract(100,'d').format();

simpleGit().commit("testFiles",{'--date' : DATE})