const core = require('@actions/core');
const github = require('@actions/github');

try {
  const param1 = core.getInput('param1');
  console.log(`Printing custom action param ${param1}`);

  const result = 'Success';
  core.setOutput('result', result) // Must result as string use JSON.stringify

  console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
  core.setFailed(error.message);
}


