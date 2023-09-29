var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
  version: '1.2',
  organization: 'Civil Aviation | CAE',
  title: 'AW139',
  language: 'en-US',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, '../build'),
  package: {
      version: process.env.npm_package_version,
      zip: true,
      author: 'Xennial Digital',
      outputFolder: path.join(__dirname, '../scorm-packages'),
      description: 'AW139 Simulator',
      keywords: ['scorm', 'aw139', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©CAE Inc. ${new Date().getFullYear()}. All rights reserved.`,
      vcard: {
        author: 'Jhony Moncada',
        org: 'Xennial Digital',
        tel: '(754) 273-7633',
        address: '2200 Biscayne Blvd, Miami, FL 33137',
        mail: 'xennial@xennialdigital.com',
        url: 'https://xennialdigital.com/'
      }
  }
};

scopackager(config, function(msg){
  console.log(msg);
  process.exit(0);
});
