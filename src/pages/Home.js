import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>

  <main className="main__content_wrapper">
    {/* Start slider section */}
    <section className="hero__slider--section">
      <div className="hero__slider--activation swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">Beauty is Whatever <br />
                        Brings Perfect</h2>
                      <p className="slider__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat. </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018C11.1225 0.392216 11.0412 0.338185 10.9507 0.301395C10.8601 0.264605 10.7623 0.245867 10.6636 0.246372C10.5648 0.246877 10.4672 0.266615 10.377 0.304329C10.2869 0.342044 10.2061 0.396903 10.14 0.465385C10.001 0.610077 9.9245 0.79778 9.92549 0.992021C9.92649 1.18626 10.0049 1.37316 10.1454 1.51643L13.6531 4.9864L0.935903 5.05145C0.734471 5.06613 0.546408 5.15137 0.409525 5.29006C0.272641 5.42874 0.197086 5.61057 0.19805 5.799C0.199014 5.98743 0.276425 6.16848 0.41472 6.30575C0.553015 6.44303 0.74194 6.52635 0.943512 6.53896L13.6586 6.47392L10.1866 9.98155C10.0475 10.1262 9.97108 10.3139 9.97207 10.5082C9.97306 10.7024 10.0514 10.8893 10.192 11.0326C10.2588 11.1004 10.3401 11.1544 10.4306 11.1912C10.5212 11.228 10.6189 11.2467 10.7177 11.2462C10.8165 11.2457 10.9141 11.226 11.0042 11.1883C11.0944 11.1506 11.1751 11.0957 11.2413 11.0272L15.9786 6.25458C16.1206 6.1093 16.1989 5.91956 16.1979 5.72303C16.1969 5.5265 16.1167 5.33757 15.9732 5.19375Z" fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider1-layer.png" alt="slider-img" />
              </div>  
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">Beauty is Whatever <br />
                        Brings Perfect</h2>
                      <p className="slider__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat. </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018C11.1225 0.392216 11.0412 0.338185 10.9507 0.301395C10.8601 0.264605 10.7623 0.245867 10.6636 0.246372C10.5648 0.246877 10.4672 0.266615 10.377 0.304329C10.2869 0.342044 10.2061 0.396903 10.14 0.465385C10.001 0.610077 9.9245 0.79778 9.92549 0.992021C9.92649 1.18626 10.0049 1.37316 10.1454 1.51643L13.6531 4.9864L0.935903 5.05145C0.734471 5.06613 0.546408 5.15137 0.409525 5.29006C0.272641 5.42874 0.197086 5.61057 0.19805 5.799C0.199014 5.98743 0.276425 6.16848 0.41472 6.30575C0.553015 6.44303 0.74194 6.52635 0.943512 6.53896L13.6586 6.47392L10.1866 9.98155C10.0475 10.1262 9.97108 10.3139 9.97207 10.5082C9.97306 10.7024 10.0514 10.8893 10.192 11.0326C10.2588 11.1004 10.3401 11.1544 10.4306 11.1912C10.5212 11.228 10.6189 11.2467 10.7177 11.2462C10.8165 11.2457 10.9141 11.226 11.0042 11.1883C11.0944 11.1506 11.1751 11.0957 11.2413 11.0272L15.9786 6.25458C16.1206 6.1093 16.1989 5.91956 16.1979 5.72303C16.1969 5.5265 16.1167 5.33757 15.9732 5.19375Z" fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider2-layer.png" alt="slider-img" />
              </div> 
            </div>
          </div>
          <div className="swiper-slide">
            <div className="hero__slider--items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider__content">
                      <h2 className="slider__maintitle text__primary h1">Beauty is Whatever <br />
                        Brings Perfect</h2>
                      <p className="slider__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  aliquip ex ea commodo consequat. </p>
                      <Link className="primary__btn slider__btn" to="/shop">
                        SHOP NOW
                        <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9732 5.19375L11.1893 0.460018C11.1225 0.392216 11.0412 0.338185 10.9507 0.301395C10.8601 0.264605 10.7623 0.245867 10.6636 0.246372C10.5648 0.246877 10.4672 0.266615 10.377 0.304329C10.2869 0.342044 10.2061 0.396903 10.14 0.465385C10.001 0.610077 9.9245 0.79778 9.92549 0.992021C9.92649 1.18626 10.0049 1.37316 10.1454 1.51643L13.6531 4.9864L0.935903 5.05145C0.734471 5.06613 0.546408 5.15137 0.409525 5.29006C0.272641 5.42874 0.197086 5.61057 0.19805 5.799C0.199014 5.98743 0.276425 6.16848 0.41472 6.30575C0.553015 6.44303 0.74194 6.52635 0.943512 6.53896L13.6586 6.47392L10.1866 9.98155C10.0475 10.1262 9.97108 10.3139 9.97207 10.5082C9.97306 10.7024 10.0514 10.8893 10.192 11.0326C10.2588 11.1004 10.3401 11.1544 10.4306 11.1912C10.5212 11.228 10.6189 11.2467 10.7177 11.2462C10.8165 11.2457 10.9141 11.226 11.0042 11.1883C11.0944 11.1506 11.1751 11.0957 11.2413 11.0272L15.9786 6.25458C16.1206 6.1093 16.1989 5.91956 16.1979 5.72303C16.1969 5.5265 16.1167 5.33757 15.9732 5.19375Z" fill="currentColor" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__slider--layer">
                <img className="slider__layer--img" src="assets/img/slider/home1-slider3-layer.png" alt="slider-img" />
              </div>  
            </div>
          </div>
        </div>
        <div className="slider__pagination swiper-pagination" />
      </div>
    </section>
    {/* End slider section */}
    {/* Start collection section */}
    <section className="shop__collection--section section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">Shop By Category</h2>
        </div>
        <div className="shop__collection--column5 swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
              <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection1.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
                <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection2.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
              <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection3.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                  </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
              <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection4.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                  </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
              <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection5.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
                  </Link>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="shop__collection--card text-center">
              <Link className="shop__collection--link"  to="/shop">
                  <img className="shop__collection--img" src="assets/img/collection/collection2.webp" alt="icon-img" />
                  <h3 className="shop__collection--title">Vitamins &amp; Health</h3>
                  <span className="shop__collection--subtitle">25 Items</span>
               </Link>
              </div>
            </div>
          </div>
          <div className="swiper__nav--btn swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className=" -chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
          <div className="swiper__nav--btn swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className=" -chevron-left"><polyline points="15 18 9 12 15 6" /></svg>
          </div>
        </div>
      </div>
    </section>
    {/* End collection section */}
    {/* Start image width text section */}
    <section className="image__width--text__section position-relative">
      <div className="container">
        <div className="image__width--text__inner d-flex position-relative">
          <div className="image__width--text__thumbnail position-relative">
            <img src="assets/img/banner/banner1.webp" alt="image" />
            <div className="image__width--text">
              <h2 className="image__width--text__title">Face Your Skin With Us</h2>
              <p className="image__width--text__desc">Kidlues ispum maruwes cnsectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="image__width--text__footer">
                <Link className="image__width--text__link" to="/shop">Shop Now 
                  <svg width={9} height={12} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7.96317 7.96317L1 14.9263" stroke="currentColor" strokeWidth={2} />
                  </svg>
                </Link>
                <Link className="image__width--text__link glightbox" href="#" data-gallery="video">Play Video 
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={10} cy={10} r="9.75" fill="#F7EEDD" stroke="black" strokeWidth="0.5" />
                    <path d="M15 10L7.5 14.3301L7.5 5.66987L15 10Z" fill="black" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="image__width--text__thumbnail thumbnail2">
            <img src="assets/img/banner/banner2.webp" alt="image" />
          </div>
        </div>
      </div>
      <img className="section__shape--img" src="assets/img/other/shape-img1.webp" alt="shape-img" />
      <img className="section__shape--img two" src="assets/img/other/shape-img2.webp" alt="shape-img" />
    </section>
    {/* End image width text section */}
    {/* Start product section */}
    <section className="product__section section--padding ">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">TRENDING PRODUCT</h2>
        </div>
        <div className="product__section--inner">
          <div className="row mb--n30">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
              <article className="product__card">

                <div className="product__card--thumbnail">
                  <Link className="product__card--thumbnail__link display-block" to="/productDetail">
                    <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product1.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product2.webp" alt="product-img" />
                  </Link>
                  <span className="product__badge">-14%</span>
                  <ul className="product__card--action">
                    <li className="product__card--action__list">
                      <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                        <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Quick View</span>  
                      </a>
                    </li>
                    <li className="product__card--action__list">
                      <Link className="product__card--action__btn" title="Compare" to="/compare">
                        <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Compare</span>    
                      </Link>
                    </li>
                    <li className="product__card--action__list">
                    <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                        <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Wishlist</span>
                    </Link>
                    </li>
                  </ul>
                  <div className="product__add--to__card">
                  <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                      <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="product__card--content text-center">
                  <ul className="rating product__card--rating d-flex justify-content-center">
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon"> 
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon"> 
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li>
                      <span className="rating__review--text">(10) Review</span>
                    </li>
                  </ul>
                  <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
                  <div className="product__card--price">
                    <span className="current__price">₦239.52</span>
                    <span className="old__price"> ₦362.00</span>
                  </div>  
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

              <div className="product__card--thumbnail">
                <Link className="product__card--thumbnail__link display-block" to="/productDetail">
                <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product3.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product4.webp" alt="product-img" />
                </Link>
                <span className="product__badge">-14%</span>
                <ul className="product__card--action">
                  <li className="product__card--action__list">
                    <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                      <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Quick View</span>  
                    </a>
                  </li>
                  <li className="product__card--action__list">
                    <Link className="product__card--action__btn" title="Compare" to="/compare">
                      <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Compare</span>    
                    </Link>
                  </li>
                  <li className="product__card--action__list">
                  <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                      <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Wishlist</span>
                  </Link>
                  </li>
                </ul>
                <div className="product__add--to__card">
                <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                    <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="product__card--content text-center">
                <ul className="rating product__card--rating d-flex justify-content-center">
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon"> 
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon"> 
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li>
                    <span className="rating__review--text">(10) Review</span>
                  </li>
                </ul>
                <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
                <div className="product__card--price">
                  <span className="current__price">₦239.52</span>
                  <span className="old__price"> ₦362.00</span>
                </div>  
              </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

            <div className="product__card--thumbnail">
              <Link className="product__card--thumbnail__link display-block" to="/productDetail">
              <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product5.webp" alt="product-img" />
              <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product6.webp" alt="product-img" />
              </Link>
              <span className="product__badge">-14%</span>
              <ul className="product__card--action">
                <li className="product__card--action__list">
                  <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                    <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Quick View</span>  
                  </a>
                </li>
                <li className="product__card--action__list">
                  <Link className="product__card--action__btn" title="Compare" to="/compare">
                    <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Compare</span>    
                  </Link>
                </li>
                <li className="product__card--action__list">
                <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                    <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Wishlist</span>
                </Link>
                </li>
              </ul>
              <div className="product__add--to__card">
              <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                  <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="product__card--content text-center">
              <ul className="rating product__card--rating d-flex justify-content-center">
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="rating__review--text">(10) Review</span>
                </li>
              </ul>
              <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
              <div className="product__card--price">
                <span className="current__price">₦239.52</span>
                <span className="old__price"> ₦362.00</span>
              </div>  
            </div>
            </article>
            </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

            <div className="product__card--thumbnail">
              <Link className="product__card--thumbnail__link display-block" to="/productDetail">
              <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product7.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product8.webp" alt="product-img" />
              </Link>
              <span className="product__badge">-14%</span>
              <ul className="product__card--action">
                <li className="product__card--action__list">
                  <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                    <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Quick View</span>  
                  </a>
                </li>
                <li className="product__card--action__list">
                  <Link className="product__card--action__btn" title="Compare" to="/compare">
                    <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Compare</span>    
                  </Link>
                </li>
                <li className="product__card--action__list">
                <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                    <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Wishlist</span>
                </Link>
                </li>
              </ul>
              <div className="product__add--to__card">
              <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                  <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="product__card--content text-center">
              <ul className="rating product__card--rating d-flex justify-content-center">
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="rating__review--text">(10) Review</span>
                </li>
              </ul>
              <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
              <div className="product__card--price">
                <span className="current__price">₦239.52</span>
                <span className="old__price"> ₦362.00</span>
              </div>  
            </div>
            </article>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
              <article className="product__card">

                <div className="product__card--thumbnail">
                  <Link className="product__card--thumbnail__link display-block" to="/productDetail">
                    <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product1.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product2.webp" alt="product-img" />
                  </Link>
                  <span className="product__badge">-14%</span>
                  <ul className="product__card--action">
                    <li className="product__card--action__list">
                      <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                        <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Quick View</span>  
                      </a>
                    </li>
                    <li className="product__card--action__list">
                      <Link className="product__card--action__btn" title="Compare" to="/compare">
                        <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Compare</span>    
                      </Link>
                    </li>
                    <li className="product__card--action__list">
                    <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                        <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                        </svg>
                        <span className="visually-hidden">Wishlist</span>
                    </Link>
                    </li>
                  </ul>
                  <div className="product__add--to__card">
                  <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                      <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="product__card--content text-center">
                  <ul className="rating product__card--rating d-flex justify-content-center">
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon">
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon"> 
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li className="rating__list">
                      <span className="rating__icon"> 
                        <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                        </svg>
                      </span>
                    </li>
                    <li>
                      <span className="rating__review--text">(10) Review</span>
                    </li>
                  </ul>
                  <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
                  <div className="product__card--price">
                    <span className="current__price">₦239.52</span>
                    <span className="old__price"> ₦362.00</span>
                  </div>  
                </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

              <div className="product__card--thumbnail">
                <Link className="product__card--thumbnail__link display-block" to="/productDetail">
                <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product3.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product4.webp" alt="product-img" />
                </Link>
                <span className="product__badge">-14%</span>
                <ul className="product__card--action">
                  <li className="product__card--action__list">
                    <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                      <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Quick View</span>  
                    </a>
                  </li>
                  <li className="product__card--action__list">
                    <Link className="product__card--action__btn" title="Compare" to="/compare">
                      <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Compare</span>    
                    </Link>
                  </li>
                  <li className="product__card--action__list">
                  <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                      <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                      </svg>
                      <span className="visually-hidden">Wishlist</span>
                  </Link>
                  </li>
                </ul>
                <div className="product__add--to__card">
                <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                    <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="product__card--content text-center">
                <ul className="rating product__card--rating d-flex justify-content-center">
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon">
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon"> 
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li className="rating__list">
                    <span className="rating__icon"> 
                      <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                      </svg>
                    </span>
                  </li>
                  <li>
                    <span className="rating__review--text">(10) Review</span>
                  </li>
                </ul>
                <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
                <div className="product__card--price">
                  <span className="current__price">₦239.52</span>
                  <span className="old__price"> ₦362.00</span>
                </div>  
              </div>
              </article>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

            <div className="product__card--thumbnail">
              <Link className="product__card--thumbnail__link display-block" to="/productDetail">
              <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product5.webp" alt="product-img" />
              <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product6.webp" alt="product-img" />
              </Link>
              <span className="product__badge">-14%</span>
              <ul className="product__card--action">
                <li className="product__card--action__list">
                  <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                    <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Quick View</span>  
                  </a>
                </li>
                <li className="product__card--action__list">
                  <Link className="product__card--action__btn" title="Compare" to="/compare">
                    <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Compare</span>    
                  </Link>
                </li>
                <li className="product__card--action__list">
                <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                    <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Wishlist</span>
                </Link>
                </li>
              </ul>
              <div className="product__add--to__card">
              <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                  <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="product__card--content text-center">
              <ul className="rating product__card--rating d-flex justify-content-center">
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="rating__review--text">(10) Review</span>
                </li>
              </ul>
              <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
              <div className="product__card--price">
                <span className="current__price">₦239.52</span>
                <span className="old__price"> ₦362.00</span>
              </div>  
            </div>
            </article>
            </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30">
            <article className="product__card">

            <div className="product__card--thumbnail">
              <Link className="product__card--thumbnail__link display-block" to="/productDetail">
              <img className="product__card--thumbnail__img product__primary--img" src="assets/img/product/main-product/product7.webp" alt="product-img" />
                    <img className="product__card--thumbnail__img product__secondary--img" src="assets/img/product/main-product/product8.webp" alt="product-img" />
              </Link>
              <span className="product__badge">-14%</span>
              <ul className="product__card--action">
                <li className="product__card--action__list">
                  <a className="product__card--action__btn" title="Quick View" data-bs-toggle="modal" data-bs-target="#examplemodal" href="javascript:void(0)">
                    <svg className="product__card--action__btn--svg" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Quick View</span>  
                  </a>
                </li>
                <li className="product__card--action__list">
                  <Link className="product__card--action__btn" title="Compare" to="/compare">
                    <svg className="product__card--action__btn--svg" width={17} height={17} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Compare</span>    
                  </Link>
                </li>
                <li className="product__card--action__list">
                <Link className="product__card--thumbnail__link display-block" to="/whitelist">
                    <svg className="product__card--action__btn--svg" width={18} height={18} viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z" fill="currentColor" />
                    </svg>
                    <span className="visually-hidden">Wishlist</span>
                </Link>
                </li>
              </ul>
              <div className="product__add--to__card">
              <Link className="product__card--thumbnail__link display-block" to="/cart"> Add to Cart
                  <svg width={17} height={15} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2371 4H11.5261L8.5027 0.460938C8.29176 0.226562 7.9402 0.203125 7.70582 0.390625C7.47145 0.601562 7.44801 0.953125 7.63551 1.1875L10.0496 4H3.46364L5.8777 1.1875C6.0652 0.953125 6.04176 0.601562 5.80739 0.390625C5.57301 0.203125 5.22145 0.226562 5.01051 0.460938L1.98707 4H0.299574C0.135511 4 0.0183239 4.14062 0.0183239 4.28125V4.84375C0.0183239 5.00781 0.135511 5.125 0.299574 5.125H0.721449L1.3777 9.78906C1.44801 10.3516 1.91676 10.75 2.47926 10.75H11.0339C11.5964 10.75 12.0652 10.3516 12.1355 9.78906L12.7918 5.125H13.2371C13.3777 5.125 13.5183 5.00781 13.5183 4.84375V4.28125C13.5183 4.14062 13.3777 4 13.2371 4ZM11.0339 9.625H2.47926L1.86989 5.125H11.6433L11.0339 9.625ZM7.33082 6.4375C7.33082 6.13281 7.07301 5.875 6.76832 5.875C6.4402 5.875 6.20582 6.13281 6.20582 6.4375V8.3125C6.20582 8.64062 6.4402 8.875 6.76832 8.875C7.07301 8.875 7.33082 8.64062 7.33082 8.3125V6.4375ZM9.95582 6.4375C9.95582 6.13281 9.69801 5.875 9.39332 5.875C9.0652 5.875 8.83082 6.13281 8.83082 6.4375V8.3125C8.83082 8.64062 9.0652 8.875 9.39332 8.875C9.69801 8.875 9.95582 8.64062 9.95582 8.3125V6.4375ZM4.70582 6.4375C4.70582 6.13281 4.44801 5.875 4.14332 5.875C3.8152 5.875 3.58082 6.13281 3.58082 6.4375V8.3125C3.58082 8.64062 3.8152 8.875 4.14332 8.875C4.44801 8.875 4.70582 8.64062 4.70582 8.3125V6.4375Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="product__card--content text-center">
              <ul className="rating product__card--rating d-flex justify-content-center">
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon">
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li className="rating__list">
                  <span className="rating__icon"> 
                    <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="rating__review--text">(10) Review</span>
                </li>
              </ul>
              <h3 className="product__card--title"><Link to="/productDetail">Z 7-8mm Freshwater Button is </Link></h3>
              <div className="product__card--price">
                <span className="current__price">₦239.52</span>
                <span className="old__price"> ₦362.00</span>
              </div>  
            </div>
            </article>
          </div>



          </div>
          <div className="product__load--more text-center">
            <Link className="load__more--btn primary__btn" to="/shop">Load More</Link>
          </div>
        </div>
      </div>
    </section>
    {/* End product section */}
    {/* Start video banner section */}
    <section className="video__banner--section position-relative section--padding pb-0">
      <img className="video__banner--section__thumbnail" src="assets/img/banner/banner-fullwidth1.webp" alt="img" />
      <div className="video__banner--wrapper">
        <div className="container">
          <div className="video__banner--inner d-flex align-items-end">
            <div className="video__banner--box position-relative">
              <img className="video__banner--box__thumbnail" src="assets/img/banner/banner3.webp" alt="banner-img" />
              <div className="bideo__play">
                <a className="bideo__play--icon glightbox" href="https://vimeo.com/115041822" data-gallery="video">
                  <svg width={17} height={20} viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 9.13398C17.1667 9.51888 17.1667 10.4811 16.5 10.866L1.5 19.5263C0.833335 19.9112 9.70611e-07 19.4301 1.00426e-06 18.6603L1.76136e-06 1.33975C1.79501e-06 0.569945 0.833335 0.0888201 1.5 0.47372L16.5 9.13398Z" fill="currentColor" />
                  </svg>
                  <span className="visually-hidden">Video Play</span>
                </a>
              </div>
            </div>
            <div className="video__banner--content">
              <h2 className="video__banner--content__title">Beauty products that
                really work</h2>
              <p className="video__banner--content__desc">Our formulations have proven efficacy, contain organic ingredients only and are 100% cruelty free</p>
              <Link className="video__banner--content__btn primary__btn" to="/shop">SKINCARE</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End video banner section */}



    {/* Start banner fullwidth section */}
    <section className="banner__fullwidth--section position-relative">
      <img className="banner__fullwidth--bg__thumbnail" src="assets/img/banner/banner-fullwidth2.webp" alt="img" />
      <div className="banner__fullwidth--inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="banner__fullwidth--thumbnail">
                <img src="assets/img/banner/banner6.webp" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner__fullwidth--content">
                <h3 className="banner__fullwidth--content__subtitle">SPECIAL OFFER</h3>
                <h2 className="banner__fullwidth--content__title">Set For A Good Time</h2>
                <p className="banner__fullwidth--content__desc">We are committed to offering the finest selection of clean and natural skin care products created by the world’s leading brands that are pioneers in innovation, science, technology, and sustainability.</p>
                <Link className="banner__fullwidth--content__btn primary__btn" to="/shop">SHOP NOW</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End banner fullwidth section */}
    {/* Start skin advice section */}
    <section className="skin__advice--section section--padding">
      <div className="container">
        <div className="skin__advice--content text-center">
          <h2 className="skin__advice--content__title">Truly love the skin you're in</h2>
          <p className="skin__advice--content__desc">Our vision is to give melanin rich skin the attention it deserves. We don't want to just nurture your skin—we want you to discover the beauty that lies within.</p>
          <h3 className="skin__advice--content__subtitle">Everyone needs a Iil' Buttah – baby!</h3>
        </div>
      </div>
    </section>
    {/* End skin advice section */}
    {/* Start banner section */}
    <section className="banner__section section--padding pt-0">
      <div className="container">
        <div className="row mb--n30">
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="banner__box border-radius-5 position-relative">
              <Link className="display-block" to="/shop"><img className="banner__box--thumbnail border-radius-5" src="assets/img/banner/banner7.webp" alt="banner-img" />
                <div className="banner__box--content">
                  <h2 className="banner__box--content__title ">Beauty Box</h2>
                  <p className="banner__box--content__desc">Freshwater pearl necklace and earrings</p>
                  <span className="banner__box--content__btn primary__btn">EXPLORE </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="banner__box border-radius-5 position-relative">
              <Link className="display-block" to="/shop"><img className="banner__box--thumbnail border-radius-5" src="assets/img/banner/banner8.webp" alt="banner-img" />
                <div className="banner__box--content">
                  <h2 className="banner__box--content__title ">Organic Serium</h2>
                  <p className="banner__box--content__desc">Freshwater pearl necklace and</p>
                  <span className="banner__box--content__btn primary__btn style2">EXPLORE </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End banner section */}
    {/* Start testimonial section */}
    <section className="testimonial__section testimonial__bg section--padding">
      <div className="container">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle">What Clients Are Saying</h2>
        </div>
        <div className="testimonial__section--inner testimonial__swiper--activation swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial1.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael	Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial2.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Lee Barners</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial3.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Michael	Linda</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial__items">
                <div className="testimonial__author d-flex align-items-center">
                  <div className="testimonial__author__thumbnail">
                    <img src="assets/img/other/testimonial4.webp" alt="testimonial-img" />
                  </div>
                  <div className="testimonial__author--text">
                    <h3 className="testimonial__author--title">Lee Barners</h3>
                    <span className="testimonial__author--subtitle">Beautician</span>
                    <ul className="rating testimonial__rating d-flex">
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon">
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                      <li className="rating__list">
                        <span className="rating__icon"> 
                          <svg width={14} height={13} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z" fill="currentColor" />
                          </svg>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="testimonial__content">
                  <p className="testimonial__desc"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                  <img className="testimonial__vector--icon" src="assets/img/icon/vector-icon.webp" alt="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial__pagination swiper-pagination" />
        </div>
      </div>
    </section>
    {/* End testimonial section */}
    {/* Start feature section */}
    <section className="feature__section section--padding">
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
  </main>


        </>
    );
}

export default Home; 