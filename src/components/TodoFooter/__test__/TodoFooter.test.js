import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

describe('TodoFooter', () => {
  describe('Function 1', () => {
    it('should render correct amount of incomplete tasks', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={5} />)
      const paragraphElement = screen.getByText(/5 tasks left/i)
      expect(paragraphElement).toBeInTheDocument()
    })
  })

  describe('Function 2', () => {
    it('should render task when on task is left', async () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />)
      const paragraphElement = screen.getByText(/1 task left/i)
      expect(paragraphElement).toBeInTheDocument()
    })
  })
})

// it('is visible', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible()
//   });

// it('has p', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p")
//   });

// it('has text', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement).not.toHaveTextContent("2 task left")
//   });

//   it('is not falsy', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement).not.toBeFalsy()
//   });

//   it('uses value', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para');
//     expect(paragraphElement.textContent).toBe('1 task left')
//   });
