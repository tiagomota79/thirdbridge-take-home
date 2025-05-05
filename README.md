# Known Issues and alternatives

During development, I ran into an issue where, after login, Auth0 tried to redirect to the base URL on callback, causing a 404 error. The base implementation was made using the [official guide](https://auth0.com/docs/quickstart/webapp/nextjs/interactive#add-the-authentication-middleware), while also consulting [Auth0's GitHub page for the NextJS SDK](https://github.com/auth0/nextjs-auth0?tab=readme-ov-file).

This is apparently a known issue from the Auth0 team, as seen in [this community post](https://community.auth0.com/t/next-js-callback-404-not-found-error/186208). Other users experienced similar issues as [seen here](https://community.auth0.com/t/404-error-when-following-basic-setup-instructions/132231). I wasn't able to find a solution for this. The solution posted by Auth0 at the community post linked above didn't work. No other solutions were found. The implementation was kept in the code, in the `/api/auth` folder, and can be accessed on the same URL - though due to the unsolved issue, the style will be improper and the user's list from the alternative DB will show in the left.

Since authentication was key to receiving the data from the API, this was a major block in development. In order to be able to continue with the task, I mocked the expected data, infering the schema from the images in the repository, and proceeded to developing the dashboard without real data from the API. I used a simple database stored on Neon, and used Prisma in the application to access the DB. The mock data, as well as a simple script to load the data into the DB are in the `/db` folder. The connection string to the DB is on the `env.example` file.

To simulate the slow response from the `/friends` endpoint, I used a simple timeout function inside the component, allowing the use of a loader message.

## Important

Some of the packages used are not yet fully compatible with React 19. To avoid errors, use the flag `--legacy-peer-deps` when installing the packages: `npm i --legacy-peer-deps`.

---

## Context

Using the meta framework of your choice (NextJS, SvelteKit, etc), perform the following tasks. If you discover any anomalies, take note of them and let us know 😉 Please note that you are encouraged to use AI productivity tools such as Cursor and GitHub Copilot.

## Task 1

You will be provided with the credentials for an existing Auth0 account. Create a login page along with the associated logic to implement the Authorization Code Flow. If possible, avoid using libraries like next-auth — the goal is to validate your understanding of the protocol. Keep the design of the login page as minimal as possible.

> 📝 You don’t need to implement JWT validation — the logic is already provided in `utils/validate-jwt.ts`

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/login-flow.png" alt="Login flow" width="600">

## Task 2

Create a Dashboard page respecting the following dimensions:

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/dashboard-display.png" alt="Dashboard display" width="600">

## Task 3

Implement the ‘My Profile’ section using the `/profile/{id}` endpoint.

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/my-profile.png" alt="My Profile" width="600">

## Task 4

Implement the ‘My Friends’ section using the `/friends` endpoint. Note that the developers poorly modeled the social network and that this call is particularly slow.

<img src="https://s3.ca-central-1.amazonaws.com/thirdbridge.ca/take-home-assets/my-friends.png" alt="Login flow" width="600">
