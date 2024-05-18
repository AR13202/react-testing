import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodo = jest.fn();

// unit testing
describe('AddInput', () => {
  //test to check input element is there on the screen
  it('should render input element', async ()=>{
    render(
      <AddInput 
        todos={[]}
        setTodos={mockSetTodo}
      />
    )
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(InputElement).toBeInTheDocument();
  })
  // trigger /fire an event test
  it('should be able to type into input', async ()=>{
    render(
      <AddInput 
        todos={[]}
        setTodos={mockSetTodo}
      />
    )
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(InputElement, { target: {value: "Go Grocery Shopping"} })
    //by this fire event we has added a value to input tag "Go Grocery Shopping".
    expect(InputElement.value).toBe("Go Grocery Shopping");
  })
  //test after submitting the input value
  it('should be empty input when add button is clicked', async ()=>{
    render(
      <AddInput 
        todos={[]}
        setTodos={mockSetTodo}
      />
    )
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(InputElement, { target: {value: "Go Grocery Shopping"} })
    const buttonElement = screen.getByRole("button", {name: /Add/i});
    fireEvent.click(buttonElement);//clicking button.
    expect(InputElement.value).toBe("");
  })
})
