# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

// Table content to use
`const columns = [
{
accessor: 'checkbox',
label: (),
},
{ accessor: 'id', label: 'S.N' },
{
accessor: 'lineBreakInfo',
label: 'User',
lineBreakInfo: {
topLine: { accessor: 'name' },
bottomLine: { accessor: 'link' },
},
},
{ accessor: 'name', label: 'Name', sort: true },
{ accessor: 'link', label: 'Link', sort: true },
{
accessor: 'active',
label: 'Active',
sort: true,
roundedColor: [
{
text: 'manager',
bgColor: 'bg-purple-400',
textColor: 'text-purple-900',
},
{
text: 'super_admin',
bgColor: 'bg-cyan-200',
textColor: 'text-cyan-800',
},
{ text: 'admin', bgColor: 'bg-lime-200', textColor: 'text-lime-800' },
{ text: 'other', bgColor: 'bg-teal-200', textColor: 'text-teal-800' },
],
},
{
label: 'Action',
editLink: 'editUser',
deleteLink: true,
viewLink: 'viewUser',
optionLink: {
previewLink: 'previewPages',
manageLink: 'managePages',
},
},
]
const rows = [
{
id: 1,
name: 'admin',
link: 'admin_api@unitechmedia.com.np',
active: 'admin',
},
{
id: 2,
name: 'support',
link: 'semantakarki@unitechmedia.com.np',
active: 'manager',
},
{
id: 3,
name: 'Test',
link: 'samitarai@unitechmedia.com.np',
active: 'manager',
},
{
id: 4,
name: 'admin',
link: 'joshisisir24@gmail.com',
active: 'super_admin',
},
{
id: 5,
name: 'Manager',
link: 'joshisisir24@gmail.com',
active: 'admin',
},
{
id: 6,
name: 'admin',
link: 'admin_api@unitechmedia.com.np',
active: 'manager',
},
{
id: 7,
name: 'support',
link: 'semantakarki@unitechmedia.com.np',
active: 'super_admin',
},
{
id: 8,
name: 'Test',
link: 'samitarai@unitechmedia.com.np',
active: 'admin',
},
{
id: 9,
name: 'admin',
link: 'joshisisir24@gmail.com',
active: 'super_admin',
},
{
id: 10,
name: 'Manager',
link: 'joshisisir24@gmail.com',
active: 'admin',
},
]
const additionalTableData = {
searchAccessor: 'link',
newTitle: {
title: 'Page',
link: 'createPage',
},
}
`
