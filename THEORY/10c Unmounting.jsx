// Unmounting
// The next phase in the lifecycle is when a component is removed from the DOM, 
//or unmounting as React likes to call it.

// React has only one built-in method that gets called when a component is unmounted:

// componentWillUnmount()
// componentWillUnmount
// The componentWillUnmount method is called when the component is about to be removed from the DOM.
// Click the button to delete the header:

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));








//************************ */
import {createcontext} from 'react';
export const MyContext = createcontext();

//write below inside return statement
<MyContext.Provider value={value}>
  <Displaysection/> 
</MyContext.Provider>;

//in child component , first
import {MyContext} from './App';
const res = useContext(MyContext);
