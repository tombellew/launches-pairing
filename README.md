## Submission
10 launches displayed from the SpaceX api, only fetching the required data. Rendered through components in the components folder. Basic styling applied to the app. 

Tests with Jest / React testing libary, and Cypress for e2e testing.

A few known considerations & things which could be improved...

In general I prefer to have files in the folder they're used until the point they're used in multiple places. I consider that the types and the api fetch would likely be placed in types and services folders as the project grows.

There's some hardcoding of variables & text would be better placed in config files.

I've prefered real data as opposed to mock data in the testing as the data and api should be stable.

#### Testing
- ```npm run test:unit```
- ```npm run test:e2e```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed
We would like you to clone this repository and amend the home page to display a list of Cards with the launches data retrieved from the spacex data API. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:
- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:
- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.
