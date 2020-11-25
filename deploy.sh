rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ChiLi2000/wheel-ui-website.git &&
git push -f -u origin main &&
cd -
echo http://chili00.xyz/wheel-ui-website/index.html
