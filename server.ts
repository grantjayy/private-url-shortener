import app from './settings';
import config from './config/config';
import logging from './config/logging';
import utmParams from './models';
import { buildUrl } from './utils';

const PORT = process.env.PORT || 80;
//Default URL - Returns index page and redirect domain set in config
app.get('/', (req, res) => {
    let context = {
        utm_source: '',
        url: config.redirect_domain,
        facebook_pixel: config.facebook_pixel,
        facebook_pixel_noscript: config.facebook_pixel_noscript,
        app_name: config.app_visible_name
    };
    res.render('index', context);
});

//Tracking links
app.get('/i/:pk', async (req, res) => {
    let url = '';
    let context = {
        utm_source: '',
        url: config.redirect_domain,
        facebook_pixel: config.facebook_pixel,
        facebook_pixel_noscript: config.facebook_pixel_noscript,
        app_name: config.app_visible_name
    };

    try {
        const obj = await utmParams.findOne({ pk: req.params.pk }); //Get DB Values

        //Check if anything exists in the object
        if (obj) {
            obj.clicks += 1;
            obj.save();
            url = buildUrl(obj.toObject()); //Builds the URL
            context.utm_source = obj.utm_source;
        } else {
            url = buildUrl(obj, false);
        }

        context.url = url as string;
        res.render('index', context);
    } catch (error) {
        logging.error(`Error in Go Link CLick ${error}`);
        res.render('index', context);
    }
});

//Admin Page
//TODO: Create a real authentication system
app.get('/A5Fqfuo540lvPhxVO6u7HF1v84BiFofj', async (req, res) => {
    const data = await utmParams.find({}); //Get all UTM Codes and sort from newest to oldest
    res.render('admin', {
        data: data.reverse(), // Send Data in Reverse order
        app_name: config.app_visible_name,
        hosted_domain: config.hosted_domain
    });
});

//Create new UTM Params object
app.post('/create', async (req, res) => {
    const params = await utmParams.create(req.body);
    return res.send(params.toJSON()); //Send the result back in JSON
});

//TODO: Create update function
// app.post('/update', (req, res) => {
//     console.log();
// });

//TODO: Create delete function
// app.post('/delete', (req, res) => {
//     console.log();
// });

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    logging.info(`Server is Running on ${PORT}`);
});
