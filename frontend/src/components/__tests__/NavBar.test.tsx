import { render, screen } from '../../test/test-utils'
import NavBar from '../NavBar'

describe('NavBar component', async () => {
  it('should render navBar', () => {
    render(<NavBar />)
    const homeBtn = screen.getByText(/HOME/i)
    const shopBtn = screen.getByText(/SHOP/i)

    expect(homeBtn).toBeInTheDocument()
    expect(shopBtn).toBeInTheDocument()
    expect(screen.getByText(/ABOUT/i)).toBeInTheDocument()
  })
})
