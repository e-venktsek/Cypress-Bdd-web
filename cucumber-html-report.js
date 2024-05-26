const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/reports/cucumber-json',
	reportPath: './reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'dev test',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'API Marketplace'},
            {label: 'Execution Start Time', value: new Date()}
        ]
    }
});