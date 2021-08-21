# Private URL Shortener with tracking

---

Have you ever wanted to send a link to a prospect with UTM tracking codes but didn't want to send them a long scary URL?

Do you want to track your sale's reps performance with more dynamic link clicks?

Do you want to be able to have a private URL shortener that you control?

Do you want to dynamically set Facebook pixel data based on UTM Parameters?

Look no further, this is your solution.

This program creates a server where you are able to track links clicks while hiding tracking codes.

## How it Works

This is a node.js package written in TypeScript.

The client side URL will look something like: `https://example.com/i/##`.

Where the "##" Correlates to a numerical tracking ID in the database.

The server will look for the numerical value, and if it exists, it will generate a url with UTM Parameters that have been specified earlier.

For example, lets say the lookup value `12` has the UTM Paramters of:

```
UTM Source = "google"
UTM Medium = "cpc"
UTM Campaign = "paid+search+trail"
UTM Content = "This+is+my+utm+content"
UTM Term = "myterms"
```

The client clicks on the link `https://example.com/i/12`, then is immediately redirected to the specified redirect domain with all the UTM parameters. If the redirect domain is set to
`https://www.anotherexample.com`, then the final url will be:

`https://www.anotherexample.com?utm_source=google&utm_medium=cpc&utm_campaign=paid+search+trail&utm_content=This+is+my+utm+content&utm_term=myterms`

See how much scarier that long url looks compared to the short one?

## Installation

Download the repository and run "npm install".

Run the `server.ts` file for final execution.

## Configuration & Instructions

In the config folder in config-chagemge.ts, change the values to your app values.

You will need to connect a mongo database.

You will also need to copy your Facebook Pixel into the code.

Once you have changed the config-changeme.ts file, rename it to 'config.ts'.

Your admin page can be found on http://\<your-domain\>/A5Fqfuo540lvPhxVO6u7HF1v84BiFofj
