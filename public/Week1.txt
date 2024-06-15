Day 1: Introduction to React
React:
•	React is a JavaScript library focused on building user interfaces (UIs) with a component-based architecture.
•	It follows the MVC (Model-View-Controller) design pattern and is primarily used for creating single-page applications (SPAs).
Day 2: Refreshing HTML, CSS, and JavaScript
Goal:
•	Revisit the basics of HTML, CSS, and JavaScript to ensure a strong foundation for learning React.
Day 3: Setting Up the React Environment
Steps:
npx create-react-app my-app
cd my-app
npm start
Day 4: Learning About JSX
JSX:
•	JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript.
•	It makes the code more readable and maintains the logic and UI in the same file.
Using JSX:
•	Embedding Expressions: Use curly braces {} to embed JavaScript expressions.
const element = <h1>Hello, {name}</h1>;
•	Attributes in JSX: Use camelCase for attributes, such as className instead of class.
   const element = <img src={user.avatarUrl} alt="User Avatar" />;
•	Children in JSX: Elements can have children.
const element = (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);
Day 5: Understanding React Components
React Components:
•	Components are the core building blocks of React applications, which can be defined as functions or classes.
Types of Components:
1.	Functional Components: Simple functions that return JSX.
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
2.	Class Components: ES6 classes that extend React.Component.
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
Component Hierarchy:
•	Components can be nested, reused, and composed to build complex UIs.
•	Each component manages its own state and props, promoting modularity and reusability.





