import React from 'react'
import { connect } from 'react-redux';

function Counter({counter,increment, decrement}) {
  return (
    <div>
    <p>counter:{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </div>
  )
}
const mapStateToProps = (state)=>({
    counter: state.counter
});
const mapDispatchToProps = (dispatch)=>({
    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'})
})
export default connect(mapDispatchToProps,mapStateToProps)(Counter);