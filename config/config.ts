//Config for the program. Set MongoDM URL and redirect domain

const config = {
    app_visible_name: 'Men of Action',
    redirect_domain: 'https://www.moamentoring.com',
    hosted_domain: 'https://go.moamentoring.com',

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
        url: `mongodb+srv://grantjordan:7n7Trq2fp4x5s6m@moago.eyx8r.mongodb.net/MOAgoDb`
    },

    facebook_pixel: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1045340609543779');
        fbq('track', 'PageView');
    `,
    facebook_pixel_noscript: `
    <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1045340609543779&ev=PageView&noscript=1"/>
    `
};

export default config;
