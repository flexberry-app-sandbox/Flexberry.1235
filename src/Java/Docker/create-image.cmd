docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 1235-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 1235-java/app ../../..
