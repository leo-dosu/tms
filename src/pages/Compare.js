import React from 'react'
import { Link } from "react-router-dom";

const Compare = () => {
  return (
    <>
    
    <main class="main__content_wrapper">
        
<div>
  {/* Start breadcrumb section */}
  <div className="breadcrumb__section breadcrumb__bg">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="breadcrumb__content text-center">
            <ul className="breadcrumb__content--menu d-flex justify-content-center">
              <li className="breadcrumb__content--menu__items"><Link to="/">Home</Link></li>
              <li className="breadcrumb__content--menu__items"><span>Compare</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End breadcrumb section */}
  {/* Start Compare section */}
  <section className="compare__section section--padding">
    <div className="container">
      <div className="row row-cols-1">
        <div className="col">
          <div className="section__heading text-center mb-40">
            <h2 className="section__heading--maintitle">Compare Product Page Style</h2>
          </div>
          <div className="compare__section--inner table-responsive">
            <table className="compare__table">
              <thead className="compare__table--header">
                <tr className="compare__table--items">
                  <td className="compare__table--items__child">
                    <button type="button" aria-label="compare remove btn" className="compare__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                    </button>
                    <h3 className="compare__product--title h4">Cotton Dress</h3>
                    <img className="compare__product--thumb display-block" src="assets/img/product/small-product/product1.webp" alt="compare-image" />
                  </td>
                  <td className="compare__table--items__child">
                    <button type="button" aria-label="compare remove btn" className="compare__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                    </button>
                    <h3 className="compare__product--title h4">Edna Dress</h3>
                    <img className="compare__product--thumb display-block" src="assets/img/product/small-product/product2.webp" alt="compare-image" />
                  </td>
                  <td className="compare__table--items__child">
                    <button type="button" aria-label="compare remove btn" className="compare__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                    </button>
                    <h3 className="compare__product--title h4">Edna Dress</h3>
                    <img className="compare__product--thumb display-block" src="assets/img/product/small-product/product3.webp" alt="compare-image" />
                  </td>
                  <td className="compare__table--items__child">
                    <button type="button" aria-label="compare remove btn" className="compare__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                    </button>
                    <h3 className="compare__product--title h4">Edna Dress</h3>
                    <img className="compare__product--thumb display-block" src="assets/img/product/small-product/product4.webp" alt="compare-image" />
                  </td>
                  <td className="compare__table--items__child">
                    <button type="button" aria-label="compare remove btn" className="compare__remove">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144M368 144L144 368" /></svg>
                    </button>
                    <h3 className="compare__product--title h4">Edna Dress</h3>
                    <img className="compare__product--thumb display-block" src="assets/img/product/small-product/product5.webp" alt="compare-image" />
                  </td>
                </tr>
              </thead>
              <tbody className="compare__table--body">
                <tr className="compare__table--items">
                  <td className="compare__table--items__child">
                    <span className="compare__product--price">$89,00</span>
                  </td>
                  <td className="compare__table--items__child">
                    <span className="compare__product--price">$89,00</span>
                  </td>
                  <td className="compare__table--items__child">
                    <span className="compare__product--price">$89,00</span>
                  </td>
                  <td className="compare__table--items__child">
                    <span className="compare__product--price">$89,00</span>
                  </td>
                  <td className="compare__table--items__child">
                    <span className="compare__product--price">$89,00</span>
                  </td>
                </tr>
                <tr className="compare__table--items">
                  <th className="compare__table--items__child--header">Product Description</th>
                  <th className="compare__table--items__child--header">Product Description</th>
                  <th className="compare__table--items__child--header">Product Description</th>
                  <th className="compare__table--items__child--header">Product Description</th>
                  <th className="compare__table--items__child--header">Product Description</th>
                </tr>
                <tr className="compare__table--items">
                  <td className="compare__table--items__child">
                    <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__description">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
                  </td>
                </tr>
                <tr className="compare__table--items">
                  <th className="compare__table--items__child--header">Availability</th>
                  <th className="compare__table--items__child--header">Availability</th>
                  <th className="compare__table--items__child--header">Availability</th>
                  <th className="compare__table--items__child--header">Availability</th>
                  <th className="compare__table--items__child--header">Availability</th>
                </tr>
                <tr className="compare__table--items">
                  <td className="compare__table--items__child">
                    <p className="compare__instock text__secondary">In stock</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__instock text__secondary">In stock</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__instock text__secondary">In stock</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__instock text__secondary">In stock</p>
                  </td>
                  <td className="compare__table--items__child">
                    <p className="compare__instock text__secondary">In stock</p>
                  </td>
                </tr>
                <tr className="compare__table--items">
                  <td className="compare__table--items__child">
                    <a className="compare__cart--btn primary__btn" href="cart.html">Add to Cart</a>
                  </td>
                  <td className="compare__table--items__child">
                    <a className="compare__cart--btn primary__btn" href="cart.html">Add to Cart</a>
                  </td>
                  <td className="compare__table--items__child">
                    <a className="compare__cart--btn primary__btn" href="cart.html">Add to Cart</a>
                  </td>
                  <td className="compare__table--items__child">
                    <a className="compare__cart--btn primary__btn" href="cart.html">Add to Cart</a>
                  </td>
                  <td className="compare__table--items__child">
                    <a className="compare__cart--btn primary__btn" href="cart.html">Add to Cart</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Compare section */}
  {/* Start feature section */}
  <section className="feature__section section--padding pt-0">
    <div className="container">
      <div className="feature__inner d-flex justify-content-between">
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature1.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Free Shipping</h2>
            <p className="feature__content--desc">Free shipping over $100</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon ">  
            <img src="assets/img/other/feature2.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Support 24/7</h2>
            <p className="feature__content--desc">Contact us 24 hours a day</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature3.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">100% Money Back</h2>
            <p className="feature__content--desc">You have 30 days to Return</p>
          </div>
        </div>
        <div className="feature__items d-flex align-items-center">
          <div className="feature__icon">  
            <img src="assets/img/other/feature4.webp" alt="img" />
          </div>
          <div className="feature__content">
            <h2 className="feature__content--title h3">Payment Secure</h2>
            <p className="feature__content--desc">We ensure secure payment</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End feature section */}
</div>

    </main>

    </>
  )
}

export default Compare