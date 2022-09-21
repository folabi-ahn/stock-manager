const express = require('express');
const categoriesRoute = require('./categories.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/categories',
        route: categoriesRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;