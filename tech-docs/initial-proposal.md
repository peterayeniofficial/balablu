# Overview

## Context

we are building this webiste to allow users to login, check the president achievments and people can vote on their status of satisfaction

## Problem statment

This inital implmentation is using nextJs to build a fullstack web app, the user can vote and keep tracking what is the overall satisfaction rate.

## User need

The user need is to login, vote, and track overall satisfaction rate.

## Goals

This tech-doc is only created to make the MVP with inital feature of the current web app.

## Non-Goals

1. This is not used to allow people to participate in presendent election.
2. This is not used to give report of who exatly (names) vote in the satisfaction rate.
3. This is not personal web app to the president.

## Proposal

## User Flow

The user when enter the webiste, needs to see the current satisfaction rate, and below that a ckeck list to check which promises have been achieved by the president. on left corner there is a button for the user to login. After login the user can vote and participate in the satisfaction rate.

### Vote form

The user need to have 5 list items (can be changed) each has its rate from one to ten.
Below that there is a submit button and an alert next to it to notify the user that, you can vote after 4 hours.

## Technical implementation

Depending on the scope and nature of your proposal, consider also addressing: Reliability, Maintainability, Scalability, Observability, Developer Experience, Documentation.

### Datebase

We will be using MySQL (PlanetScale) in conjunction with Prisma.

### Backend

Our backend will be built using TypeScript, and for authentication, we will integrate Clerk.

### Frontend

The frontend of our application will be developed using Next.js, React, and Tailwind CSS.

## Success Criteria

1. The user can check the last updated satisfaction rate.
2. The user can login and vote anytime.
3. The president promises are updated and checked.
4. the user can check the list items and the overall rate of each item in the vote form.

## Risks

What if the user lost the data?
what if the user identity and information are became public?
what if the web app does not accept new users?
