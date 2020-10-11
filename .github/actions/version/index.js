const core = require('@actions/core');

try {
  const bucketTagsContent = core.getInput('param1');
  console.log(bucketTagsContent);
  const bucketTags = JSON.parse(bucketTagsContent);
  const version = Number(bucketTags.TagSet.find(curr => curr.Key === 'version').Value);

  const updatedBucketTags = {
    ...bucketTags,
    TagSet: bucketTags.TagSet.map(tag => {
      if (tag.Key === 'version') {
        return {...tag, Value: `${version + 1}`}
      }
      return {...tag};
    })
  }

  core.setOutput('version', `${version + 1}`);
  core.setOutput('tags', JSON.stringify(updatedBucketTags));

} catch (error) {
  core.setFailed(error.message);
}


