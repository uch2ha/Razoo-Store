import { render, screen } from '../../../../test/test-utils'
import ProductsGridComponent from '../../components/ProductsGridComponent'

const setProductId = vi.fn()

describe('ProductsGridComponent component', async () => {
  it('should render ProductsGridComponent', () => {
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
    render(<ProductsGridComponent setProductId={setProductId} />)
    expect(screen.getByText(/Products/i)).toBeInTheDocument()
  })
})
