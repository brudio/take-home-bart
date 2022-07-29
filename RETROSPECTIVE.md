## Development Brief

### Tech stack:
* React.js 17 + TypeScript ✅
* Redux Persist ✅
* Redux Toolkit ✅
* Playwright ✅
* React-Testing-Library ✅
* Docker 
* Storybook 
* Husky 
* GitHub CI/CD 
* Netlify Automatic Deployment
* ESLint Airbnb ✅
* Styled-Components ✅
* SEO (Meta-data) 
* react-datepicker ✅

### Data:
* Mocked

## Q&A

1. Describe your architecture decisions(why did you choose to make it with …)
* I chose Create React App rather than Next.js, because Next.js is more buggy when bootstrapping products in small periods. For this type of project, we don’t need to take advantage of Next.js features like dynamic image optimization, and better SSR support.
* I chose React v17 instead of the latest React v18 because handling the state updates is twice as difficult as with v17 and in our case (very limited time) I wouldn’t be able to present what I did.
* I chose TypeScript instead of React prop-types for the ultimate type assertions. (Doesn’t matter if it’s a small project or not)
* I chose Redux Toolkit instead of Redux to set the global state up more efficiently and to maintain cleaner code.
* I chose Redux Persist instead of classic localStorage because of possible async data handling/middleware in a project like this
* I chose Playwright instead of Cypress for the E2E testing purposes because Playwright has fewer high-level dependencies than Cypress has that aren’t needed for a small dashboard project.
* I chose the React-Testing library for the unit testing purposes to test virtual DOM not only with Playwright but to catch eventual smaller bugs
* I chose Docker for the quick development setup (for the ESLint Airbnb config and some custom ones, also for useful IDE plugins and settings that would make everyone in the codebase well prepared for the development)
* I chose Netlify to deploy the application because of its quick and easy integration with GitHub CI/CD (time-efficient).
* I used ESLint Airbnb config (with some custom plugins) to make the development process more secure, more time-efficient, and Prettier, to make the codebase clean.
* I chose styled-components instead of predefined solutions like AntDesign because testing custom components that can be done fairly quickly is much better than pre-made components.
* I chose the react-datepicker npm package instead of building a custom one because of time-saving, and it’s very customizable.

2. How was the challenge for you in terms of difficulty?
* Everything is good, but I would need a day more to make it look better and apply/finish every unfinished task.

3. Did you encounter any problems? How did you solve them?
* Without any designs and very few details about the task, I picked some “project budget dashboard” images from the internet as inspiration for a Figma board and checked the different possibilities of how such an application could be engineered in terms of a good UI/UX. Unfortunately, not have enough time to finish this up.

4. Do you see any improvements in your solution?
* Finishing up the designs
* More unit tests for the Input component
* E2E tests (for every possible user flow scenario, like adding a new budget, updating hourly rate and making sure it got updated across the budgets - as described, and for adding time log entries and making sure everything is visible to the user)
* GitHub CI/CD - 4 jobs (build, unit tests, E2E tests, preview deployment)
* Connect the repo with Netlify (CI/CD, preview deployment)
* Show more data on the page
* Memoizing and code-splitting the components from the DashboardHome component to different ones for better app performance and no memory leaks
