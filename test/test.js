'use strict';

var jsonApprover = require('../index');
var assert = require('chai').assert;

describe('JSON Approver Unit Tests', function() {
    it('should return true for valid JSON', function() {

        var myData = '{"knockKnock":"whosThere"}';

        var isJson = jsonApprover.isJSON(myData);

        assert.isTrue(isJson);
    });

    it('should return false for invalid JSON', function() {

        var myData = '{"jsonPlease": NOWAY}';

        var isJson = jsonApprover.isJSON(myData);

        assert.isFalse(isJson);
    });

});
