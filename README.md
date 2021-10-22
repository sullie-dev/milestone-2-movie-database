# Movie database

[View project here](https://milestone-2-movie-database.vercel.app/)

---

THe movie database project is a simple project which lets someone quickly search
for a movie or TV and view some basic info on what they've searched. It will
first bring up a a card showing the title, an image poster and some
miscellaneous info.

The user can then view more about the program they searched. This will give some
additional information such as the plot director etc.

![Am I responsive image](https://i.imgur.com/7vlWDMv.png)

Responsiveness was checked using
[Am I responsive](http://ami.responsivedesign.is/), in order to get the search
results top populate you will need to add a search term to each search box due
to the way the state is saved, data is only fetched when the search button is
clicked

## Deployment

Project is deployed using Vercel, the stops to get the the project working are
as follows

1.  Create Github repo
1.  Head to **Vercel.com** and sign in
1.  **New project** on the dashboard
1.  Import Github repo.
1.  Configure project
1.  Wait for project to build
1.  Once the project is built navigate to the project link

## Features

The app itself is rather basic but it allows the user to search for a specific
movie or TV shows using the Open Movie Database which returns the movie(s) or TV
show(s) which are on IMDB, this is done by using a search bar component to get
the search term and pass it into the api request.

![search bar](https://i.imgur.com/rOjSp22.png)

---

### Validation Testing

The majority of the app is written in React using Typescript as a way to help
validate the logic within the JS and to ensure that the right data types are
being used where needed.

Due to the way Typescript is set up it's difficult to use JSHint to validate the
code as it does not recognise React and Typescript validity, please see the
screenshot below of the erros shows on JSHint

![JSHint errors](https://i.imgur.com/1MohWms.png)

The site was also checked using Google lighthouse to check for performance
accessability, and more performance scored a 88 however all the other categories
scored 90 or above.

![Imgur](https://i.imgur.com/WIknYlH.png)

The css was checked using the CSS validator, due to the way the style sheets are
generated when using Next js the css had to be manually copied into the
validator using a text area.

The CSS passed validation

![css validation](https://i.imgur.com/JF3s1V5.png)

## Bugs:

---

#### Solved bugs:

I came across a few bugs when making the is project the most common bugs were
Type Errors for functions with the below error code

`Type 'void' is not assignable to type 'MouseEventHandler<HTMLAnchorElement> | undefined'.ts(2322)`

This error code was being generated as I was not passing in an event this was
solved by adding an event in the onClick method
`onClick={(e) => [Function here]}`

The other error which I came across when using Typescript was some of the
variables were being implicitly typed by the code editor, to resolve this I had
to either create an interface or to add the type of `any` where the type did not
matter such as when the api returned an object with a sting that was needed

There were 2 other bugs which I ran into, the first bug was when the MovieCard
components were generated that the components were missing keys, as keys need to
be unique in React this was fixed by adding the IMDb id as the key.

![Key error](https://i.imgur.com/6bZnCHZ.png)

The second but was it having the `<body>` in the index.tsx file, this cannot
appear in a child, so to fix this I replaced the `<body>` with `<main>`.

![body tag error](https://i.imgur.com/krnrDjS.png)

### Unsolved bugs:

Looking in the console and in the VSCode console there are no errors when the
project is being built with the above changes.

One outstanding bug I had was when I tried to map through the ratings of the
movie to display on the page Typescript was not able to map through `undefined`
as I was not able to get this fixed I removed the ratings from the project. The
code for the mapping function is as below

`{movie["Ratings" as any].map((rating)=('<li> {rating}</li>'))}`

## Content

---

#### Credits

- [OMDb](http://www.omdbapi.com/)
- [Next JS](https://nextjs.org/)
- [Vercel](https://vercel.com/)

#### Media

All media in the project is returned from the api request which pulls the data
from IMDb

## Technologies used

- HTML 5
- CSS 3
- JavaScript
- Font Awesome
- GitHub
- Vercel
- React
- Typescript
- Next js
