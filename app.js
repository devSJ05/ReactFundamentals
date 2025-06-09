import React from 'react';
import ReactDOM from 'react-dom/client';

// creating header using jsx. jsx is html like syntax. jsx is used to create react element.
const jsx = <h1>Jsx heading</h1>;

const SecondComponent = () => {
  return <h2>SecondComponent</h2>;
};

// react component: two types of components - Functional : New & Class based : Old
// nesting components is known as component composition. A functional component is a javascript function that returns jsx.
export const FirstComponent = () => {
  return (
    <div>
      {/* inside curly braces you can write javascript code */}
      <p>{12 + 34}</p>
      {jsx}
      <h1>My first functional component</h1>
      <SecondComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstComponent />);
