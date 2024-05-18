import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return(
    <BrowserRouter>
      <Todo/>
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button",{ name: /Add/i});
  tasks.forEach(task=>{
    fireEvent.change(InputElement, {target: {value: task}});
    fireEvent.click(buttonElement);
  });
}
//Integration testing
describe('Todo', () => {
  //test to check input element is there on the screen
  it('should be able to type into input', async ()=>{
    render(<MockTodo/>);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button",{ name: /Add/i});
    fireEvent.change(InputElement, {target: {value: "Go Grocery shopping"}});
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple items', async ()=>{
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping","Pet my Cat", "Wash my Hands"]);
    const divElements = screen.getAllByTestId("task-Container");
    expect(divElements.length).toBe(3);
  });

  it('task should not have complete class when initally rendered', async ()=>{
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText("Go Grocery Shopping");
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it('task should have complete class when clicked', async ()=>{
    render(<MockTodo/>);
    addTask(["Go Grocery Shopping"]);
    const divElement = screen.getByText("Go Grocery Shopping");
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
})