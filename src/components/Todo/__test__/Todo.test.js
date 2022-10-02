import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Todo from '../Todo'

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', {name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement)
    })
}

describe('Todo', () => {
  it('Todo gets added', async () => {
    render(<MockTodo />)
    addTask(['Shopping'])
    const divElement = screen.getByText(/Shopping/i)
    expect(divElement).toBeInTheDocument()
  })

  it('Todos get added', async () => {
    render(<MockTodo />)
    addTask(['Shopping', 'Fishing', 'Car'])
    const divElement = screen.getAllByTestId('task-container')
    expect(divElement.length).toBe(3)
  })

  it('Todos styled not completed', async () => {
    render(<MockTodo />)
    addTask(['Shopping'])
    const divElement = screen.getByText(/Shopping/i)
    expect(divElement).not.toHaveClass('todo-item-active')
  })

  it('Todos styled not completed morer', async () => {
    render(<MockTodo />)
    addTask(['Shopping'])
    const divElement = screen.getByText(/Shopping/i)
    expect(divElement.className).not.toBe('todo-item-active')
  })

  it('Todos styled completed', async () => {
    render(<MockTodo />)
    addTask(['Shopping'])
    const divElement = screen.getByText(/Shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass('todo-item-active')
  })
})
