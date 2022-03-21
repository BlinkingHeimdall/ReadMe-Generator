const renderBadge = license => {
  if(license === 'None') {
      return ' ';
  } 

  return `
![image](https://img.shields.io/badge/license-${license.replace('-', '--')}-brightgreen)
`;
};

const renderLicense = license => {
  if(license === 'None') {
      return '';
  } 

  let licenseDesc;

  switch(license) {
      case 'AGPL':
          licenseDesc = 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.';
          break;
      case 'Apache':
          licenseDesc = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'BSL':
          licenseDesc = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'GPL':
          licenseDesc = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
          break;
      case 'LGPL':
          licenseDesc = 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.';
          break;
      case 'MIT':
          licenseDesc = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'Mozilla':
          licenseDesc = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
          break;
      case 'Unlicensed':
          licenseDesc = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
  }

  return `
## License
[https://choosealicense.com/licenses/${license.toLowerCase()}](https://choosealicense.com/licenses/${license.toLowerCase()})
${licenseDesc}
`;
};

module.exports = data => {
  console.log(data);
  
  return `
# ${data.projectName}
## Description
${data.summary}
## Table of Contents
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
## Installation
~~~
${data.installInfo}
~~~
## Testing
~~~
${data.testInfo}
~~~
## Usage
${data.usageInfo}
## Contributing
${data.contributionInfo}
## Questions
[https://github.com/${data.username}](https://github.com/${data.username})
If you have any questions or issues, you can reach me at: ${data.emailAddress}
##License
${renderBadge(data.license)}
${renderLicense(data.license)}
`;
};