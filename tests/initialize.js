/****
 * Unit Tests for the W3C cheat sheet
 * Designed to run in the Windmill framework
 * http://getwindmill.com/
 *
 * Tests may be run from the command-line:
 *  windmill firefox http://[cheatsheet address]
 *    jsdir=[path to this folder]
 */


// Force the order of the tests
var registeredTests = [
    'test_load',
    'test_search',
    'test_keyword_navigate',
    'test_tabs_navigation'
];
windmill.jsTest.register(registeredTests);
