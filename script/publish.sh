#! /bin/sh#! /bin/sh

version=${1?-Need a version}

zip_file=url_shortener.${version}.zip
rm $zip_file
zip -r $zip_file . -x ".*" -x "script/*" 
