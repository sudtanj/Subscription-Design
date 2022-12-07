# Subscription Design
## Description

A video company originally has 2 main products: Video on Demand and Live Streaming. For
conciseness we will refer to Video on Demand as just “video”.
These products were free for a while, but one day a requirement came from the product team to
monetize some of our contents, in the form of a subscription service called “Premier”.
Premier has three subscription packages, each has different price and subscription length, a
user can buy one of them to become premier:

![img](https://i.ibb.co/MpCmRBL/image.png)

On the backend side, admins can freely choose which Video / Live streaming that can be sold
as premier.
Expected implementation:
- There’s a page for users to buy subscription packages
- When a user visits a video page that has been set as Premier, the web app should show
a notice “Please Subscribe to Premier.”
- When a user has subscribed to a Premier package, and then visits Premier video, then
the web app should show a notice “Can Play.”
- A subscribed user can then access ALL the premier contents without exception.
- Once becoming a premier user, a user can’t buy another subscription until the current
subscription expires

Based on requirements above, please:
1. Design the database tables. Make as many tables as you deem necessary for the
requirement to work.
- You can use a simple plain text editor for this, for example:

![img](https://i.ibb.co/VYZyX1T/image.png)

2. Implement the application with tools and databases you are familiar with:
- You don’t need to create a dedicated page for CRUDing
(create-read-update-delete) videos, livestreamings, premier packages. You can
insert dummy data to the database using command prompts or other simpler
means.
- Since video and livestreaming controllers are expected to behave the same way,
you’re only required to implement one of them.
- For implementation simplicity, user session and user table is optional.
■ Just use the URL parameter `?user_id=<id>` to simulate user login in
pages that need them.
- Complex CSS and JS on UIs are not needed, just bare text and links
are fine.
- Feel free to use Google Search
- Don’t hesitate to ask if you find something is not clear


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
