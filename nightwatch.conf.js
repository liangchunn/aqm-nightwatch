const PKG = require('./package.json');
const BINPATH = './bin/';
const SCREENSHOT_PATH = "./output/screenshots/" + PKG.version + "/";

const config = {
    "src_folders": [
        "tests"
    ],
    "output_folder": "./output/reports/",
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

function padLeft(count) {
    return count < 10 ? '0' + count : count.toString();
}

let FILECOUNT = 0;

function imgpath(browser) {
    let a = browser.options.desiredCapabilities;
    let meta = [a.platform];
    meta.push(a.browserName ? a.browserName : 'any');
    meta.push(a.version ? a.version : 'any');
    meta.push(a.name);
    let metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
