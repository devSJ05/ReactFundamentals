// //created an object
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello React');

// //created root
// const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(heading);
// // rendered the object in root. this method is responsible to convert object to the relevant tag.
// root.render(heading);

// creation of nested elements using react & rendering sibling elements
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am h1'),
    React.createElement('h2', {}, 'I am h2'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
