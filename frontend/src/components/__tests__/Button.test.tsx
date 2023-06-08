import { fireEvent, render, screen } from '../../test/test-utils'
import Button from '../Button'

const clickHandler = vi.fn()

describe('Button component', async () => {
  it('should render button', () => {
    render(<Button clickHandler={clickHandler} label="test" />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })
  it('button clicked twice', () => {
    render(<Button clickHandler={clickHandler} label="test" />)
    const btn = screen.getByRole('button')

    fireEvent.click(btn)

    expect(clickHandler).toHaveBeenCalledTimes(1)

    fireEvent.click(btn)

    expect(clickHandler).toHaveBeenCalledTimes(2)
  })
})
