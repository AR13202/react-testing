import { render, screen } from '@testing-library/react';
import Header from '../Header';
// unit testing
it('should render same text passed into title prop', () => {
  render(<Header title="cars" />);//render
  const headingElement = screen.getByText(/cars/i);//find element
  expect(headingElement).toBeInTheDocument();//assertion
});
//we can have multiple test in our file.

// //getByRole
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = screen.getByRole("heading", {
//     name: "My Header"
//   });//find element
//   expect(headingElement).toBeInTheDocument();//assertion
// });

// //getByTitle
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = screen.getByTitle("Header");//find element
//   expect(headingElement).toBeInTheDocument();//assertion
// });

// //getById
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = screen.getByTestId("header-1");//find element
//   expect(headingElement).toBeInTheDocument();//assertion
// });

// //findBy
// it('should render same text passed into title prop', async () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = await screen.findByText(/My Header/i);//find element
//   expect(headingElement).toBeInTheDocument();//assertion
// });

// // queryBy
// // when we do not want certain test in our component.
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = screen.queryByText(/dogs/i);//find element
//   expect(headingElement).not.toBeInTheDocument();//assertion
// });

// //getAllByRole
// it('should render same text passed into title prop', () => {
//   render(<Header title="My Header" />);//render
//   const headingElement = screen.getAllByRole("heading");//find element
//   expect(headingElement.length).toBe(2);//assertion
// });