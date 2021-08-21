import mongoose from 'mongoose';
import config from './config/config';
import logging from './config/logging';

const AutoIncrement = require('mongoose-sequence')(mongoose);

/** Connect to MongoDB */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {})
    .catch((error) => {
        logging.error(`Can't connect to MongoDB ${error}`);
    });

/** Create UTM Params Schema */
const utmSchema = new mongoose.Schema({
    utm_source: {
        type: String,
        required: true
    },
    utm_medium: String,
    utm_campaign: String,
    utm_term: String,
    utm_content: String,
    clicks: {
        default: 0,
        type: Number
    }
});

/** Auto Increment PK key */
utmSchema.plugin(AutoIncrement, { inc_field: 'pk' });

export default mongoose.model('utmParams', utmSchema);
