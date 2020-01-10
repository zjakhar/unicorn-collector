# Get collecting with My Pretty Unicorn Collector!

![Unicorns](https://cdn.dribbble.com/users/141427/screenshots/2072640/lu_dribble_1x.png)

Let's create our very own unicorn app, where we can see a list of unicorns, add new unicorns to our list, and go to individual unicorn show pages.

## Part 1
Right now, we can't see any of the unicorns from our server on the page. Let's change that with a fetch request.

* Create a `UnicornIndexContainer` that will house the list of unicorns we wish to show.
* Add a fetch in `useEffect` of the `UnicornIndexContainer`, so that we can load up unicorns from our server!
* After receiving the unicorns in the `.then` of our fetch, ensure that they display on the page correctly within `UnicornTile` components. `UnicornTile` components should only show the names of unicorns.

## Part 2
Now I want to add new unicorns to our collection, because you can never have enough. Let's make a form component with a `POST` fetch.
  * Create a `NewUnicornForm` and a `UnicornsPageContainer`, which should also render `UnicornIndexContainer`
  * Move the state of the unicorns list from `UnicornIndexContainer` to `UnicornsPageContainer`
  * Make an onSubmit method that will log the fields to the screen.
  * Be able to submit the form, passing data to the new `UnicornPageContainer` so that we can display our unicorns on the page!
  * Add a 'POST' fetch, so that newly created unicorns are persisted on our backend. The new array of unicorns should rely on the return of the fetch request, not from the form payload!
  * Pass our unicorns to the `UnicornIndexContainer`

## Part 3
  I wish to see ONLY one unicorn on a page, where I can see all of the little details about a unicorn. We'll need a show page and react router to help us make our dreams come true.

  * Define routes in `App.js` such that router renders our app. Going to `"/"` or `"/unicorns"` should render the UnicornPageContainter as usual.
  * Define a route for the `/unicorns/:id`, such that a new component, `UnicornShowContainer` is rendered on the screen
  * The `UnicornShowContainer` should display the `name` and `description` of our respective unicorn. Note: You'll likely need to make another fetch request on componentDidMount to retrieve this information.
  * Be sure to add a `Link` component, so that each `li` in our unicorns list is actually a link to the unicorn's show page.
