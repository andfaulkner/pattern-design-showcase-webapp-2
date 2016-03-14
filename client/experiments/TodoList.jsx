import { createStore } from 'redux';
import {reducers} from './reducers';

const store = createStore(reducers.todos);

const Todo = ({ text, completed }) => {
	return (<input type="checkbox" checked={completed}>{text}</input>)
}

const Input = ({value, onClick, handleTextChange, handleNewTodoBtnClick}) => (
	<div>
		<input 
			type='textbox'
			name='newTodo'
			value={value}
			onChange={handleTextChange}
		/>
		<button onClick={this.props.onClick}>Save todo</button>	
	</div>
);

const TodoList = () => (
	<div>
		<Input 
			value={store.getState()}
			onClick={() => {
				const store = store.getState();
				const newId = Math.max.apply(null, _.pick(store, 'id')) + 1;
				store.dispatch({
					action: 'ADD_TODO',
					id: newId,
					text: this.state.value,
					completed: false
				});
			}}
			handleTextChange={(e) => this.setState({value: e.target.value})}
			handleNewTodoBtnClick={
				(event) => {
					this.setState({value: this.state.value})
				}
			}
		/>
		{
			_.map(store.getState(), (todoItem) => {
				return (
					<Todo text={todoItem.text} value={todoItem.completed} />
				);
			})
		}
	</div>
);