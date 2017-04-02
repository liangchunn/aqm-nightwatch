# aqm-nightwatch
## Installing

### Clone the repository:
```sh
git clone https://github.com/liangchunn/aqm-nightwatch.git && cd aqm-nightwatch
```
### Install components:
```sh
npm install
```

### To update Selenium and Chrome drivers:
```sh
npm run postinstall
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

### Reports and screenshots
Reports and screenshots are saved in `reports/` and `screenshots/` under the root directory
