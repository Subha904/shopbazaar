import React from 'react';
import './ProductList.css';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

const ProductList = () => {
  const products = [
    { name: 'Healthcare Erbology', category: 'in healthcare', stock: '85 in stock in 2 variants', price: '$23.99', sku: '401_1BBXBK', status: 'PUBLISHED', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKS9iEoSouZbd4osF6j62JwMwFUB_jZp0qA&s' },
    { name: 'Makeup Lancome Rouge', category: 'in makeup', stock: '0 in stock', price: '$95.00', sku: '978_UBFGJC', status: 'PUBLISHED', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWbnwMa0Y3W3AoeJSA5-afuYHU2K3b-qj-w&s' },
    { name: 'Layering Bracelets Collection', category: 'in jewelry', stock: '48 in stock in 5 variants', price: '$155.00', sku: '211_QFEXJO', status: 'DRAFT', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQn499Nf708BfYNJugRew2hnEt59EXGSQN8Q&s' },
    { name: 'Skincare Necessaire', category: 'in skincare', stock: '5 in stock', price: '$17.99', sku: '321_UWEAJT', status: 'PUBLISHED', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7ILD-AO4XlIy7z1DjczAtggkByevRtgV2w&s' },
    { name: 'Skincare Soja CO', category: 'in skincare', stock: '10 in stock', price: '$65.99', sku: '592_LDKDI', status: 'DRAFT', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxT66WJ0Q-lGrFbMOBD200v26UrzvUM2HHWg&s' }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6I0GQDWq9jvAd1JlMBXZC_hTuZw-P9fxcA&s" alt="ShopBazar Logo" style={{ width: '150px', height: '150px' }} />
        </div>
        <nav>
          <ul>
            <li><span role="img" aria-label="Books">📚</span> Dashboard</li>
            <li className="active" style={{ color: 'blue' }}><span role="img" aria-label="Boxes">📦</span> Products</li>
            <li><span role="img" aria-label="Person">👥</span> Customers</li>
            <li><span role="img" aria-label="Shopping Cart">🛒</span> Orders</li>
            <li><span role="img" aria-label="Truck">🚚</span> Shipments</li>
            <li><span role="img" aria-label="ATM Card">💳</span> Transactions</li>
            <li><span role="img" aria-label="Settings">⚙</span> Settings</li>
            <li><span role="img" aria-label="Arrow Right">〔→</span>Logout</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <header>
          <h1>Products</h1>
          <div className="header-actions">
            <button className=" add-btn"><MdAdd size={20} />  Add</button>
            <span className="ellipsis">⋮</span>
            <span className="ellipsis">🔔</span>
            <div className="profile-pic">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvbZYuJeLfizXvNFIEkD80rHQukUqHt2UqQ&s" alt="Profile" style={{ width: '110px', height: '90px' }} />
            </div>
          </div>
        </header>
        <div className="breadcrumb"><b><span style={{ color: 'black' }}>Dashboard </span></b>&gt; <b><span style={{ color: 'black' }}>Products </span></b> &gt; List</div>
        <div className="search-bar">
          <input type="text" placeholder="🔍 Search by product name" />
        </div> 
        <div className="info-bar">
          <div className="arrow">Category &#9660;</div>
          <div className="arrow">Status &#9660;</div>
          <div className="arrow">Stock &#9660;</div>
        </div><br/>
        <table>
          <thead>
          <tr style={{ backgroundColor: '#E0E0E0' }}>
              <th>NAME</th>
              <th>STOCK</th>
              <th>PRICE</th>
              <th>SKU</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody class="naam">
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <div className="product-info">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                      <div>{product.name}</div>
                      <div className="category">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>{product.sku}</td>
                <td><span className={`status ${product.status.toLowerCase()}`}>{product.status}</span></td>
                <td>
                  <MdMoreHoriz size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
      <div className="pagination-info">
        <span>rows per page:  5⬇</span>
        <span>1-5 of 7  ⬅ ➡  </span>
      </div>
    </div>
      </div>
    </div>
  );
};

export default ProductList;
