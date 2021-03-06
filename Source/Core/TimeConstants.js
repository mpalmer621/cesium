/*global define*/
define(function() {
    "use strict";

    /**
     * Constants for time conversions like those done by {@link JulianDate}.
     *
     * @exports TimeConstants
     *
     * @see JulianDate
     */
    var TimeConstants = {
        /**
         * The number of seconds in one millisecond: <code>0.001</code>
         * @constant
         * @type {Number}
         */
        SECONDS_PER_MILLISECOND : 0.001,

        /**
         * The number of seconds in one minute: <code>60</code>.
         * @constant
         * @type {Number}
         */
        SECONDS_PER_MINUTE : 60.0,

        /**
         * The number of minutes in one hour: <code>60</code>.
         * @constant
         * @type {Number}
         */
        MINUTES_PER_HOUR : 60.0,

        /**
         * The number of hours in one day: <code>24</code>.
         * @constant
         * @type {Number}
         */
        HOURS_PER_DAY : 24.0,

        /**
         * The number of seconds in one hour: <code>3600</code>.
         * @constant
         * @type {Number}
         */
        SECONDS_PER_HOUR : 3600.0,

        /**
         * The number of minutes in one day: <code>1440</code>.
         * @constant
         * @type {Number}
         */
        MINUTES_PER_DAY : 1440.0,

        /**
         * The number of seconds in one day, ignoring leap seconds: <code>86400</code>.
         * @constant
         * @type {Number}
         */
        SECONDS_PER_DAY : 86400.0,

        /**
         * The number of days in one Julian century: <code>36525</code>.
         * @constant
         * @type {Number}
         */
        DAYS_PER_JULIAN_CENTURY : 36525.0,

        /**
         * One trillionth of a second.
         * @constant
         * @type {Number}
         */
        PICOSECOND : 0.000000001,

        /**
         * DOC_TBA
         * @constant
         * @type {Number}
         */
        MODIFIED_JULIAN_DATE_DIFFERENCE : 2400000.5
    };

    return TimeConstants;
});