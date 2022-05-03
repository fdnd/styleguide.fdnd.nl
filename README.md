# FDND Styleguide

It's a styleguide for FDND!

## Develop

Start a dev environment using `npm start` which will run a basic webserver on
localhost:1234.

## Deploy

Running `npm run build` will generate a new version of the website including all
optimised assests in the `/docs` folder (for GitHub pages). Make sure to point
the `fdnd.css` file to the latest index.[hash].css file using:

```
$ ln -s index.[hash].css fdnd.css
```

Push your version to the live environment to do release your update.
