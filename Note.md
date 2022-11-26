# Describing the UI

### Default vs named exports

| Syntax  | Export statement                    | Import statement                      |
|---------|-------------------------------------|---------------------------------------|
| Default | export default function Button() {} | import Button from './button.js';     |
| Named   | export function Button() {}         | import { Button } from './button.js'; |

## Passing props to a component

* Props are not always static.  Props reflect a component’s data at any point in time, rather than only in the beginning.


* Immutable - props are read-only snapshots in time (every render new prop). If you need to change ask the parent to change it or use state.


* Forward all props with <Avatar {...props} /> JSX spread syntax


* Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
```js
function Card({ children }) {
    return (
        <div className="card"> {children} </div>
    );
}
```

### Passing object props

```js
// App.js
<Gallery person={{name:"tim", age:12 }}/>

// Gallery.js
export default function Gallery({person: {name, age}}) {
    return (
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}
```

### Conditional Rendering

if statements, &&, and ? : operators

```js
function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item">{name} ✔</li>;
    }
    return <li className="item">{name}</li>;
    // or null - if you want to render nothing
}
```

```js
// {cond ? <A /> : <B />}
return (
    <li className="item">
        {isPacked ? name + ' ✔' : name}
    </li>
);
```

```js
// {cond && <A />}
return (
    <li className="item">
        {name} {isPacked && '✔'}
    </li>
);
```

## Rendering Lists

[Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### map()

```js
// include key prop
const listItems = people.map(person => <li key=person.id>{person}</li>);
```
key can be either from database or you can generate it with uuid package (npm install uuid) or crypto.randomUUID().
Dont use Math.random() as key because it is not same for every render.
If component need id then pass it as prop separately since key is just for react to identify the element.

### filter()

```js
const listItems = people.filter(person => person.age > 18).map(person => <li>{person}</li>);
```

## Pure Functions

* It minds its own business and doesn’t change anything outside of its scope.
* Same inputs, same outputs.

React there are three kinds of inputs that you can read while rendering: [props](https://beta.reactjs.org/learn/passing-props-to-a-component), [state](https://beta.reactjs.org/learn/state-a-components-memory), and [context](https://beta.reactjs.org/learn/passing-data-deeply-with-context). You should always treat these inputs as read-only.

<React.StrictMode> - React offers a “Strict Mode” in which it calls each component’s function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.

But its okay to change variable you just created inside the function.

# Adding Interactivity











## Children

```js
const Button = ({ children }) => {
  return <button>{children}</button>;
};

ReactDOM.render(
  <Button>Click me</Button>,
  document.getElementById('root')
);
```


## React APIs

## Fragment

Fragments are <>...</> are used to group a list of children without adding extra nodes to the DOM.
With <Fragment key={post.id}>...</Fragment> you can add a key to the element. 