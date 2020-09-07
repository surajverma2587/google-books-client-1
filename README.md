# Google Books Client

## Tickets

### GB-1 - Create the frontend boilerplate

#### Description

In order to get started and have code that the rest of the team can develop on, we need some sort of scaffolded structure in place.

#### ACs

- Use `npx create-react-app` to generate the basic boilerplate for the frontend in a **separate** frontend repo.
- Should have the basic app in a deployable state if you wanted e.g. if I check it out and run it - I can see the react app.
- Cleanup the `src/` folder so that it's in a simple workable state
- Install `react-bootstrap` to aid our component creation and 'solution' acquiring

### GB-2 - Create the google books nav bar

#### Description

`As a user I want to navigate to other places, so that I can see the search screen, or I can see the saved screen.`
We can create a navbar in dark theme potentially (dealer's choice) from the react-bootstrap package. It should have a Logo and 2 links.

#### ACs

- Introduce `react-router-dom` package using the `HashRouter`
- Create a `Router.js` file with a Router component that can switch between 2 different screens: `Search.js` and `Saved.js`.
- `Search.js` should be the home page, or the 'initial' page.
- The `<Navigation />` should be abstracted into it's own component, just like the `<Router />`
- Remove React-Bootstrap in favour of the standard Bootstrap package.
- Create dummy screens for both `<Search />` and `<Saved />`

### GB-3 - Add Jumbotron Header

#### Description

As a user, when I land on the /search (homepage) then I should be able to see a header component that looks like the Bootstrap jumbotron

#### ACs

- There should be a `<Header />` component that has 2 props, the `title` and the `subtitle`
- The title and subtitle should be aligned to the top of the jumbotron
- The header should have sufficient margin underneath it for the search bar that is to come.

### GB-4 - Create the BookList component for the results of a search

#### Description

As a user, I want to see the results of my search in a list, so that I can see what books are available to me.
As a user, I want to be able to click the `View` button and be taken to a google books page on that books.
As a user, I want to be able to save my book so that I can view a list of my saved books.
This has a fair amount of different styling on it, so there will be multiple layout choices that need to be considered.

#### ACs

- Create a `<BookList />` component according to the designs, utilising the props according to the following object that we've agreed on:

```js
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games",
  subtitle: null
}
```

- The BookList should display the book's title, the book's authors (which is an array), along with the image underneath and the description to the right of it.
- Don't hook it up, but there should be a View button and a Save button in the top right that allow a user to view and save the book respectively.
- The card should utilise some form of List component or Card component using the bootstrap styling so that it looks of a certain type.
- The container that this component is in, needs to have the heading 'Results'
- Click View should take the user to the book's link property and Save/Delete should interact with a CRUD like operation on the backend

### GB-5 - Create the search bar component

#### Description

As a user I want to search for books by their title, so that I can see the updated results underneath.
As a user, I want the results to update after I click out of the search bar, or I click the search button, or I press enter.
Probably best to put the placeholder in here rather than deal with any of the complexity for now, we'll implement the logic afterwards.

#### ACs

- A `<SearchBar />` component that has an input and a button
- This doesn't HAVE to be part of a form if you don't want it to
- Make use of the bootstrap default for a search bar.
- Should have a label at the top called 'Book'
