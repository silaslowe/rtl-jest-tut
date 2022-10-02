import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

describe('FollowersList', () => {

    beforeEach(() => {
        console.log("Running")
    })

    beforeAll(() => {
        console.log("All")
    })

    afterEach(() => {
        console.log("After")
    })

  it('FollowList renders', async () => {
    render(<MockFollowersList />)
    const followerDivElement = await screen.findByTestId('follower-item-0')
    screen.debug()
    expect(followerDivElement).toBeInTheDocument()
  })

//   it('FollowList all renders', async () => {
//     render(<MockFollowersList />)
//     const followerDivElements = await screen.findAllByTestId(/follower-item/i)
//     expect(followerDivElements.length).toBe(5)
//   })
})
