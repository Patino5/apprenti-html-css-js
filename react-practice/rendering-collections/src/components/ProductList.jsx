import { useState } from 'react';
import { products } from '../data/SampleData';

const ProductList = () => {
    const [nameFilter, setNameFilter] = useState('');
    const filterProducts = products.filter(p =>
        p.name.toLowerCase().includes(nameFilter.toLowerCase()));

    return (
        <div>
            <h2>Product Inventory</h2>
            <div className="mb-3">
                <label htmlFor="productFilter" className="form-label">Filter by Name:</label>
                <input type="text" id="productFilter" name="productFilter" className='form-control' placeholder='Type here to filter list...'
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)} />
            </div>
            <p className='text-muted'>
                Showing {filterProducts.length} of {products.length} products.
            </p>

            {filterProducts.length > 0 ? (
                <>
                <table className='table table-striped table-hover'>
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Stock Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterProducts.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>${p.price}</td>
                                <td>
                                    <span className={`badge ${p.inStock ? 'bg-success' : 'bg-danger'}`}>
                                        {p.inStock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </>
            ): (
                <div className="alert alert-info text-center">
                    <h5>No Products Found</h5>
                    <p>No products match your search for <strong>"{nameFilter}"</strong></p>
                    <small>Try a different search term.</small>
                </div>
            )
            }
        </div>
    )
};

export default ProductList;