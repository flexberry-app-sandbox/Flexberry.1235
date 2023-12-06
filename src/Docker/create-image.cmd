docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 1235/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 1235/app ../..
