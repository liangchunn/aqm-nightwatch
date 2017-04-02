const PKG = require('./package.json');
const BINPATH = './node_modules/nightwatch/bin/';
const SCREENSHOT_PATH = "./screenshots/" + PKG.version + "/";

const config = { 
    "src_folders": [
        "tests"
    ],
    "output_folder": "./reports",
    "selenium": {
        "start_process": true,
        "server_path": BINPATH + "selenium.jar",
        "log_path": "",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": BINPATH + "chromedriver" 
        }
    },
    "test_workers": { "enabled": true, "workers": "auto" },
    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "127.0.0.1",
            "silent": true,
            "screenshots": {
                "enabled": true,
                "path": SCREENSHOT_PATH
            },
            "globals": {
                "waitForConditionTimeout": 15000
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
}
module.exports = config;

function padLeft(count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
    return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath(browser) {
    var a = browser.options.desiredCapabilities;
    var meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name); // this is the test filename so always exists.
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
