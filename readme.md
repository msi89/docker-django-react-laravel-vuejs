## DOCKER

### For development mode

-- build and up containers

```bash
docker-compose up --build
```

### For production mode

-- build containers

```bash
docker-compose -f docker-compose.prod.yml build
```

-- up containers

```bash
docker-compose -f docker-compose.prod.yml up
```

## for django service

-- migrate

```bash
docker-compose run --rm django python manage.py migrate
```

## for laravel service

-- install required dependencies

```bash
docker-compose run --rm laravel composer install
```

-- generate key

```bash
docker-compose run --rm laravel cp .env.example .env
docker-compose run --rm laravel php artisan key:generate
```

-- migrate

```bash
docker-compose run --rm laravel php artisan migrate
```

## for spa (reactjs/vuejs) service

-- install required dependencies

```bash
docker-compose run --rm [reactjs/vuejs] yarn install
```
