/* eslint-disable */
/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authCydrasilwebapp9dbd2325UserPoolId = process.env.AUTH_CYDRASILWEBAPP9DBD2325_USERPOOLID
var storageCydrasilPlaceFilesBucketName = process.env.STORAGE_CYDRASILPLACEFILES_BUCKETNAME
var storageCydrasilPlacementInfoName = process.env.STORAGE_CYDRASILPLACEMENTINFO_NAME
var storageCydrasilPlacementInfoArn = process.env.STORAGE_CYDRASILPLACEMENTINFO_ARN

Amplify Params - DO NOT EDIT */
process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT']

var async = require('async');
var AWS = require('aws-sdk');
var util = require('util');
var fs = require('fs');

// get reference to S3 client
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
  // Read options from the event.
  console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
  var srcBucket = event.Records[0].s3.bucket.name;
  // Object key may have spaces or unicode non-ASCII characters.
  var srcKey    = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
  var dstKeyFasta    = srcKey.replace("queryFiles/", "jplaceFiles/");
  var dstKey    = dstKeyFasta.replace(".fasta", ".jplace")

  // Download the FASTA from S3, place on Cydrasil, and upload to S3 bucket.
  async.waterfall([
    function download(next) {
      // Download the FASTA from S3 onto disk.
      var params = {
        Bucket: srcBucket,
        Key: srcKey,
        };
        var file = require('fs').createWriteStream('user_query.fasta');
        s3.getObject(params).createReadStream().pipe(file);
        next();
    },
    function placeOnCydrasil(next) {
        var spawn = require('child_process').spawn;
        spawn('python3', [__dirname +'cydrasil-lambda-pipeline-v1.py']);
        next();
    },
    function upload(next) {
      // Stream the transformed image to a different S3 bucket.
      const fileContent = fs.readFileSync('placements/epa_result.jplace')

      s3.putObject({
        Bucket: dstBucket,
        Key: dstKey,
        Body: fileContent
      },
      next);
    }
  ], function (err) {
    if (err) {
      console.error(
        'Unable to resize ' + srcBucket + '/' + srcKey +
                    ' and upload to ' + dstBucket + '/' + dstKey +
                    ' due to an error: ' + err
      );
    } else {
      console.log(
        'Successfully resized ' + srcBucket + '/' + srcKey +
                    ' and uploaded to ' + dstBucket + '/' + dstKey
      );
    }

    callback(null, "message");
  }
  );
};
