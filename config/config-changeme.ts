//Config for the program. Make sure to rename the file to "config.ts"

const config = {
    app_visible_name: '', //The name that will be displayed on url titles
    redirect_domain: '', //The URL you want to redirect to
    hosted_domain: '', //The URL that this server will be hosted on

    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        //Delete everything after the ? in the url and add your password. Rename your DB after the final '/'
        url: ``
    },

    //Add Pixel without the <script></script> tags
    facebook_pixel: ``,
    //Add the <noscript> part of the pixel code here without the <noscript> tags.
    facebook_pixel_noscript: ``
};

export default config;
