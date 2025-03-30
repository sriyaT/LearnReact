#Learn React

#parcel

1. created a dev build
2. Created a local server
3. HMR(Hot Module Replacement), automatically refreshes the page, when you do any change in your file and saves the file
4. File watching algorithm it uses, it's written using c++
5. It does caching - that's why we get build faster
6. Image Optimization
7. When we build production build - it minify the build
8. it bundles, as it is a bundler
9. compress the build
10. consistent hashing
11. code splitting
12. differential bundling
13. Diagnostics of the app
14. Error Handling
15. Tree Shaking -remove unused code
16. Different dev and prod build

#Food App

Header
-Logo  
 -Nav Items
Body
-Search
-Resturant Container
-img
-name of res
-star rating
-cuisine
-delivery time
-Card Container
Footer
-Copy right
-Links
-Address
-Contact

#Two types of import, export

Default Export/Import

export default component;
import component from "path";

Named Export/Import
export const component;
import {component } from "path";

when you have multiple things to export use named export, otherwise use default export.

can we use both named export and default export from a single file ?

There are 2 types of routing in web apps

1. Client side routing
2. Server side routing

#Redux Tookit

- Install @reduxjs/tookit and react-redux
- Build our store
- connect our store to our app
- slice(cartSlice)
  -dispatch(action)
  -Selector

#setting up testing in our app

- Install React Testing library
- Installed Jest
- Installed babel dependency to use along with jest
- configure babel
- configure Parcel config file to disable babel transpilation
- Jest configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config.
- Install @testing-library/jest-dom
- npm i -D @testing-library/jest-dom
