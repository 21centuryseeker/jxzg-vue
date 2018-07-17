// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  this.expected = count
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = (res) => {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length
    }, [selector], (res) => {
      cb.call(self, res)
    })
  }
}
