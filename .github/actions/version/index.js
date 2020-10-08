const core = require('@actions/core');

try {
  const bucketTagsContent = core.getInput('bucketTagsContent');
  console.log(bucketTagsContent);
  const bucketTags = JSON.parse(bucketTagsContent);
  const version = bucketTags.TagSet.find(curr => curr.Key === 'version').Value;

  core.setOutput('version', version);

} catch (error) {
  core.setFailed(error.message);
}


