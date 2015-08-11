'use strict';

module.exports = {

    /**
     * Checks if input data is valid json.
     *
     * @param {Object} data
     * @return {Bool}
     */
    isJSON: function(data) {

        var isValid = false;

        try {
            var parsedData = JSON.parse(data);

            if (parsedData && typeof parsedData === 'object' && parsedData !== null) {
                isValid = true;
            }
        }
        catch (e) {}

        return isValid;
    },
};
