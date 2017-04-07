const BINPATH = './bin/';

require('fs').stat(BINPATH + 'selenium.jar', function(err, stat) {
    if (err || !stat || stat.size < 1) {
        require('selenium-download').ensure(BINPATH, function(error) {
            if (error) throw new Error(error);
            console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
        });
    } else {
        require('selenium-download').update(BINPATH, function(error) {
            if (error) throw new Error(error);
            console.log('✔ Selenium & Chromedriver updated!');
        })
    }
});
