const upload_s3 = require('../../CoCreate-tools/upload_s3');
const minify_js = require('../../CoCreate-tools/minify_js');
const minify_css = require('../../CoCreate-tools/minify_css');

const pkg = require('./package.json');
const name = pkg.name;

const folderOutput = './dist/'
const fileOutput = folderOutput + name + '.min.js'
const src = 'src/';
console.log("Compiling and minifying...")

const cocreate_files = [
    './'+src+name+'.js',
    ]

minify_js(cocreate_files,fileOutput)
/// Upload to S3
upload_s3(fileOutput);
/// Upload to S3 src
upload_s3('./'+src+name+'.js');

//CSS
const fileOutput_css = folderOutput + name + '.min.css'
const cocreate_files_css = [
    './'+src+name+'.css',
    ]
minify_css(cocreate_files_css,fileOutput_css)
/// Upload to S3
upload_s3(fileOutput_css);

