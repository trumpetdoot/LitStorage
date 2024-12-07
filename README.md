# Second Bind Online Assessment (Book Inventory Management System) 

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Design Decisions](#design-decisions)
6. [Challenges](#challenges)

### Features
* Add new Books: required fields include Title, Author, and ISBN code. Everythign else is optional
* Filter Books: Search book by any of the categories listed in the filter form
* Export Data: Download book inventory in either csv or json format

### Tech Stack 
* Frontend: ReactJS via Vite and Bootstrap
* Backend: NodeJS with Express
* Database: SQLite
* Package Manager: pnpm

### Installation
Ensure Node.js is already on your machine. If not refer to this link: 
[Node.js download](https://nodejs.org/en/download/package-manager)
1. Clone Repo
```
git clone https://github.com/trumpetdoot/secondbind
cd secondbind
```
2. Install Dependencies
```
cd backend
pnpm install

cd ../frontend
pnpm install
```
3. Run the application
```
cd backend
node server.js

cd ../frontend
pnpm run dev
```
4. Access App
Open your browser and search: 
`
http:localhost:5137
`
### Usage 
There are two forms. One will say Add Book while the other will say Filter Book. To add a book, fill in the required information on that form. To filter, simply choose which category you wish to filter by and fill that textbox in. When you are done, either press enter or hit the button below the form and the list of books will reflect that change.


### Design Decisions
* SQLite: Chosen for setup and usage simplicity for such a small application
* ReactJS: A library I am comfortable working with. I used bootstrap to style my components for its responsiveness and minimal custom CSS required, something I needed given the time constraint
* Node with Express backend: An efficient wya to create APIs and a technology I am comfortable using.

### Challenges
1. Time constraint was a big one. I had to juggle developping this project while studying for a finals exam that I wrote this Dec 6.
2. Form validation: There were many constraints I had to place on the forms so that inputs wouldn't break the application such as non-empty fields and ensuring that the ISBN code was a valid one. I came across express-validator which helepd a lot with this process. 
