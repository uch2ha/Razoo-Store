alter table if exists _order
    drop constraint if exists FKprpwig2d34d265to98qdg694e;


alter table if exists _order_product
    drop constraint if exists FKk9gkvltx4awcvy16ckg26co66;

alter table if exists _order_product
    drop constraint if exists FKmjjxcin7uvgej5ki1q0m58gdx;


drop table if exists _order cascade;


drop table if exists _order_product cascade;


drop table if exists _product cascade;


drop table if exists _user cascade;


create table _order
(
    order_id   uuid not null,
    created_at timestamp(6),
    status     varchar(255),
    user_id    uuid,
    primary key (order_id)
);


create table _order_product
(
    order_product_id uuid    not null,
    quantity         integer not null,
    order_id         uuid,
    product_id       uuid,
    primary key (order_product_id)
);


create table _product
(
    product_id       uuid         not null,
    category         varchar(255) not null,
    created_at       timestamp(6),
    description      varchar(300) not null,
    img              uuid,
    instruction      varchar(300) not null,
    is_fixed_product boolean      not null,
    name             varchar(50)  not null,
    price            float4       not null check (price >= 0 AND price <= 100000),
    size             varchar(10)  not null,
    primary key (product_id)
);


create table _user
(
    user_id         uuid         not null,
    created_at      timestamp(6),
    email           varchar(100) not null,
    first_name      varchar(50)  not null,
    is_google_login boolean      not null,
    last_name       varchar(50)  not null,
    password        varchar(150) not null,
    role            varchar(255),
    primary key (user_id)
);


alter table if exists _user
    add constraint UK_k11y3pdtsrjgy8w9b6q4bjwrx unique (email);


alter table if exists _order
    add constraint FKprpwig2d34d265to98qdg694e
        foreign key (user_id)
            references _user;

alter table if exists _order_product
    add constraint FKk9gkvltx4awcvy16ckg26co66
        foreign key (order_id)
            references _order;


alter table if exists _order_product
    add constraint FKmjjxcin7uvgej5ki1q0m58gdx
        foreign key (product_id)
            references _product;


