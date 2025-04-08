rm -rf dist
p build
cd dist
git init
git add .
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:allenwyj/allen-ui-website.git
git push -f -u origin main
cd ..
