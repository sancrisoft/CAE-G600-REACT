var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
  version: '1.0',
  organization: 'My Amazing Company',
  title: 'My Course',
  language: 'en-US',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, '../build'),
  package: {
      version: process.env.npm_package_version,
      zip: true,
      author: 'Firstname Lastname',
      outputFolder: path.join(__dirname, '../scorm-packages'),
      description: 'Here goes the description for the scorm package',
      keywords: ['scorm', 'test', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©${new Date().getFullYear()} My Amazing Company. All rights reserved.`,
      vcard: {
        author: 'Firstname Lastname',
        org: 'My Amazing Company',
        tel: '(000) 000-0000',
        address: '123 Sample street. Tampa, FL 33626',
        mail: 'my@email.com',
        url: 'https://www.amazingcompany.com'
      }
  }
};

scopackager(config, function(msg){
  console.log(msg);
  process.exit(0);
});
