import { render, screen } from '../../../../test/test-utils'
import ProductsGridComponent from '../../components/ProductsGridComponent'

const setProductId = vi.fn()

describe('ProductsGridComponent component', async () => {
  beforeEach(() => {
    // fake response from RTK-query
    vi.mock('../../../../store/api/products.api', async () => {
      const actual: unknown = await vi.importActual('../../../../store/api/products.api')
      return {
        ...(actual as Record<string, unknown>),
        useGetAllProductsQuery: () => ({
          isError: false,
          isLoading: false
        })
      }
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render mock products', () => {
    render(<ProductsGridComponent setProductId={setProductId} />)

    expect(screen.getByText(/Clarifying/i)).toBeInTheDocument()
    expect(screen.getByText(/Smoothing/i)).toBeInTheDocument()
    expect(screen.getByText(/Nourishing/i)).toBeInTheDocument()
  })
  it('should render 3 mock product card', () => {
    render(<ProductsGridComponent setProductId={setProductId} />)

    const cards = screen.getAllByTestId(/product_card/i)
    // 3 mock products
    expect(cards.length).toBe(3)
  })
})
