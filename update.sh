
PREFIX=$(cd "$(dirname "$0")"; pwd)
cd $PREFIX
git commit -a -m"fix"
git pull 2>/dev/null
git push 2>/dev/null
make html

