echo "*** Cleaning previous screenshots ***"
rm -rf ./../app/js/test/ui/specs/errorShots/*

echo "*** Starting wdio UI tests ***"
./../node_modules/.bin/wdio wdio.conf