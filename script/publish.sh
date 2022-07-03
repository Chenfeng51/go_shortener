#! /bin/sh#! /bin/sh

zip_file=url_shortener.zip
rm $zip_file
zip -r $zip_file . -x ".*" -x "script/*" 
