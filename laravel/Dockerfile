FROM php:7.3

RUN apt-get update -y && apt-get install -y openssl zip unzip git
# install and configure postgresql PDO
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql
# Custom php.ini config
COPY php.ini /usr/local/etc/php/php.ini
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer



WORKDIR /app/laravel
COPY . .

RUN composer install


EXPOSE 8000
CMD php artisan serve --host=0.0.0.0