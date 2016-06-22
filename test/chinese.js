/* globals describe, it */

var assert = require('assert')
var julian = require('astronomia').julian

var CalendarChinese = require('../src/chinese.js')

describe('#', function () {
  describe('newYear', function () {
    var tests = [
      '1980-02-16T08:50:49.854Z',
      '1981-02-04T22:13:42.968Z',
      '1982-01-25T04:55:59.999Z',
      '1983-02-13T00:31:55.941Z',
      '1984-02-01T23:46:21.727Z',
      '1985-02-19T18:42:38.864Z',
      '1986-02-09T00:55:16.647Z',
      '1987-01-29T13:44:28.105Z',
      '1988-02-17T15:54:07.983Z',
      '1989-02-06T07:36:51.472Z',
      '1990-01-26T19:20:02.042Z',
      '1991-02-14T17:31:47.428Z',
      '1992-02-03T18:59:35.357Z',
      '1993-01-22T18:26:49.044Z',
      '1994-02-10T14:29:57.629Z',
      '1995-01-30T22:47:41.514Z',
      '1996-02-18T23:30:06.190Z',
      '1997-02-07T15:06:12.312Z',
      '1998-01-28T06:00:54.150Z',
      '1999-02-16T06:38:46.510Z',
      '2000-02-05T13:03:18.861Z',
      '2001-01-24T13:06:50.580Z',
      '2002-02-12T07:40:59.832Z',
      '2003-02-01T10:48:24.989Z',
      '2004-01-21T21:04:57.719Z',
      '2005-02-08T22:27:57.515Z',
      '2006-01-29T14:14:34.837Z',
      '2007-02-17T16:14:15.793Z',
      '2008-02-07T03:44:24.971Z',
      '2009-01-26T07:55:16.930Z',
      '2010-02-14T02:51:23.077Z',
      '2011-02-03T02:30:43.534Z',
      '2012-01-23T07:39:21.844Z',
      '2013-02-10T07:20:06.721Z',
      '2014-01-30T21:38:32.023Z',
      '2015-02-18T23:47:13.344Z',
      '2016-02-08T14:38:53.783Z',
      '2017-01-28T00:07:05.417Z',
      '2018-02-15T21:05:14.457Z',
      '2019-02-04T21:03:33.479Z',
      '2020-01-24T21:42:02.038Z',
      '2319-02-21T05:33:21.906Z'
    ]
    var cal = new CalendarChinese()
    tests.forEach(function (t) {
      var date = new Date(t)
      it(t, function () {
        var y = date.getFullYear()
        var jde = cal.newYear(y)
        var res = new julian.Calendar().fromJDE(jde).toDate()
        assert.equal(res.toISOString(), t)
      })
    })
  })
})