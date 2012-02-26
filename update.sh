
PREFIX=$(cd "$(dirname "$0")"; pwd)
cd $PREFIX
git commit -a -m"fix"
git pull
git push
make html

