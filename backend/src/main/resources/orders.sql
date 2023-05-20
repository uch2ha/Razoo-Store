-- Dmitry's order 1
INSERT INTO _order (order_id, user_id, status, created_at)
VALUES ('e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d', '835549f1-53c8-43df-b5c2-04bbbef1aee5',
        'DELIVERED', '2023-05-19T16:51:52.275915');

INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('e10c1e1e-3a0d-4e6e-813d-5e7a4b9133f9', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        '7a15c6b2-f7e6-4e1a-9308-868d2e9f97c7', '7');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('2ab9e29e-1a63-4d6d-907f-879e97e7f96b', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        '22a9b2b2-1ec6-4cc7-a63f-489ea3ff6f3e', '2');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('d0340fa3-7560-41a8-a979-987d78f9a5bc', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        '5c844301-63a0-43b4-9e3f-587a7c8944f8', '1');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('f8628dd0-0d17-4c35-a3b7-4e4c76dbf032', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        'ce5e51d1-fd5f-4842-998d-855a0b450e8b', '4');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('7e25398e-2931-4216-aa4a-2ed7a0a96eab', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        'fae37726-8a6a-4b09-9989-8247242d38f1', '2');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('1c749e13-1ff5-4919-a4b4-17f35a0d542d', 'e7c7f82f-8a7b-4b84-bb63-5a21abf3d58d',
        'f4c78b10-2a9c-4f4c-bd30-18f26a7d1504', '2');

-- Dmitry's order 2
INSERT INTO _order (order_id, user_id, status, created_at)
VALUES ('3b250772-79a7-4b81-bc9b-7e8e20c3ff52', '835549f1-53c8-43df-b5c2-04bbbef1aee5',
        'IN_PROCESS', '2023-05-20T15:51:52.275915');

INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('6d35a14a-85d9-4ee0-9e70-9bdc87a42f9f', '3b250772-79a7-4b81-bc9b-7e8e20c3ff52',
        '7a15c6b2-f7e6-4e1a-9308-868d2e9f97c7', '2');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('f8ec4882-eeaf-487d-bde5-9030c5703a0d', '3b250772-79a7-4b81-bc9b-7e8e20c3ff52',
        '22a9b2b2-1ec6-4cc7-a63f-489ea3ff6f3e', '2');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('a1d432a6-c0b5-4928-9f9a-68c1e49c8e2b', '3b250772-79a7-4b81-bc9b-7e8e20c3ff52',
        'ce5e51d1-fd5f-4842-998d-855a0b450e8b', '2');


-- Diana's order
INSERT INTO _order (order_id, user_id, status, created_at)
VALUES ('39e16ac2-1f76-4a42-9c18-5024c6aeb40b', 'ec41f014-d13f-49a7-8ab7-9f9e09a5a4d2',
        'IN_TRANSIT', '2023-05-16T15:51:52.275915');

INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('c7b5ebe6-97d0-4e27-8be6-819c2de9e3f2', '39e16ac2-1f76-4a42-9c18-5024c6aeb40b',
        '7a15c6b2-f7e6-4e1a-9308-868d2e9f97c7', '2');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('5429ca82-5c57-4dcd-b036-7d3441b5efc3', '39e16ac2-1f76-4a42-9c18-5024c6aeb40b',
        '22a9b2b2-1ec6-4cc7-a63f-489ea3ff6f3e', '4');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('aedc5d79-54ed-4c1a-b0e9-6d16c3af2ab8', '39e16ac2-1f76-4a42-9c18-5024c6aeb40b',
        '5c844301-63a0-43b4-9e3f-587a7c8944f8', '6');
INSERT INTO _order_product (order_product_id, order_id, product_id, quantity)
VALUES ('85c08ff0-0f25-477c-8b9f-87435f15f5a9', '39e16ac2-1f76-4a42-9c18-5024c6aeb40b',
        'ce5e51d1-fd5f-4842-998d-855a0b450e8b', '1');
