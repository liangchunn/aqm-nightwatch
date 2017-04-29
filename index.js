const express = require('express');
const opn = require('opn');
const path = require('path');

// Load the tasks in gulpfile.js so that we can invoke it programmatically
const gulp = require('gulp');
require('./gulpfile');

const app = express();

app.get('/', (req, res) => {
	// Render the HTML file
	res.sendFile(path.join(__dirname + '/index.html'));
})

// This is the endpoint to call the gulp task
app.get('/start', (req, res) => {
	if (gulp.tasks.test) {
		// Start the task named 'test'
		gulp.start('test', (err) => {
			// Send the response when the task is done
			if (err) {
				res.end("Failed")
			} else {
				res.end("Success");
			}
		})
	}
})

const server = app.listen(8081, () => {
	// Open the default browser as soon as the http server is ready
	opn(`http://localhost:${server.address().port}`);
})
