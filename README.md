<<<<<<< HEAD
# aqm-nightwatch
## Installing

### Clone the repository:
Mac/Linux:

```sh
git clone https://github.com/liangchunn/aqm-nightwatch.git && cd aqm-nightwatch
```

Windows:

Click on `Clone or download` on the upper right, then `Download ZIP`

### Install components:
```sh
npm install
```

### Updating Selenium and Chrome drivers:
```sh
npm run update
```

## Testing

### Running Tests
To run all tests in the `tests/` folder:
```sh
npm test
```

### Adding tests
To add tests, just add the `.js` test file into `tests/`.

Remember to `const config = require('../nightwatch.conf.js')` and use `config.imgpath()` to properly save the image in the correct folder

### API Reference

Everything you need to find about Nightwatch can be found [here](http://nightwatchjs.org/api)

### Reports and screenshots
Reports and screenshots are saved in `reports/` and `screenshots/` under the root directory
=======
# aqm-nightwatch
## Installing

### Clone the repository:
Mac/Linux:

```sh
git clone https://github.com/liangchunn/aqm-nightwatch.git && cd aqm-nightwatch
```

Windows:

Click on `Clone or download` on the upper right, then `Download ZIP`

### Install components:
```sh
npm install
```

### Updating Selenium and Chrome drivers:
```sh
npm run update
```

## Testing

### Running Tests
To run all tests in the `tests/` folder:
```sh
npm test
```

### Adding tests
To add tests, just add the `.js` test file into `tests/`.

Remember to `const config = require('../nightwatch.conf.js')` and use `config.imgpath()` to properly save the image in the correct folder

### API Reference

Everything you need to find about Nightwatch can be found [here](http://nightwatchjs.org/api)

### Reports and screenshots
Reports and screenshots are saved in `reports/` and `screenshots/` under the root directory
>>>>>>> origin/master
