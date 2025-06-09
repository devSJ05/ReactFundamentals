import React from 'react';
import ReactDOM from 'react-dom/client';

// creating header using jsx. jsx is html like syntax. jsx is used to create react element.
const jsx = <h1>Jsx heading</h1>;

const SecondComponent = () => {
  return <h2>SecondComponent</h2>;
};

// react component: two types of components - Functional : New & Class based : Old
export const FirstComponent = () => {
  return (
    <div>
      <h1>My first functional component</h1>
      <SecondComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FirstComponent />);
