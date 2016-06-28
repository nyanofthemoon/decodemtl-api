export default {

    environment: {
        whitelist: process.env.CORS_WHITELIST || '*',
        port:      process.env.PORT || 8000
    },

    wp: {
        url: process.env.WP_API_URL || 'http://localhost/wp-json/wp/v2',
        auth: {
            username: process.env.WP_USER_NAME     || 'api',
            password: process.env.WP_USER_PASSWORD || '123'
        },
        endpoint: {
            course:  'course',
            staff:   'staff',
            student: 'student',
            event:   'event',
            page:    'pages',
            post:    'posts'
        }
    }
}