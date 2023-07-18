import React from 'react'

function Home() {
  return (

    <div className="page-wrapper">
      <div className="page-content">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
          <div className="col">
            <div className="card radius-10 bg-gradient-cosmic">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Total Orders</p>
                    <h4 className="my-1 text-white">4805</h4>
                    <p className="mb-0 font-13 text-white">+2.5% from last week</p>
                  </div>
                  <div id="chart1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-ibiza">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Total Revenue</p>
                    <h4 className="my-1 text-white">$84,245</h4>
                    <p className="mb-0 font-13 text-white">+5.4% from last week</p>
                  </div>
                  <div id="chart2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-ohhappiness">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Bounce Rate</p>
                    <h4 className="my-1 text-white">34.6%</h4>
                    <p className="mb-0 font-13 text-white">-4.5% from last week</p>
                  </div>
                  <div id="chart3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-kyoto">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-dark">Total Customers</p>
                    <h4 className="my-1 text-dark">8.4K</h4>
                    <p className="mb-0 font-13 text-dark">+8.4% from last week</p>
                  </div>
                  <div id="chart4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="card radius-10">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Sales Overview</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center ms-auto font-13 gap-2 mb-3">
                  <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1 text-info"></i>Downloads</span>
                  <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle me-1 text-danger"></i>Earnings</span>
                </div>
                <div className="chart-container-9">
                  <canvas id="chart5"></canvas>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-0 row-group text-center border-top">
                <div className="col">
                  <div className="p-3">
                    <h4 className="mb-0">$168</h4>
                    <small className="mb-0">Today's Sales <span> <i className="bx bx-up-arrow-alt align-middle"></i> 2.43%</span></small>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h4 className="mb-0">$856</h4>
                    <small className="mb-0">This Week Sales <span> <i className="bx bx-up-arrow-alt align-middle"></i> 12.65%</span></small>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h4 className="mb-0">$2400</h4>
                    <small className="mb-0">This Month Sales <span> <i className="bx bx-up-arrow-alt align-middle"></i> 5.62%</span></small>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h4 className="mb-0">$4,562</h4>
                    <small className="mb-0">This Year Sales <span> <i className="bx bx-up-arrow-alt align-middle"></i> 12.62%</span></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card radius-10">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Top Categories</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container-9">
                  <canvas id="chart6"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="card radius-10">
              <div className="card-header">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Product Views</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container-9">
                  <canvas id="chart7"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card radius-10">
          <div className="card-header">
            <div className="d-flex align-items-center">
              <div>
                <h6 className="mb-0">Recent Orders</h6>
              </div>
              <div className="dropdown ms-auto">
                <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="javascript:;">Action</a>
                  </li>
                  <li><a className="dropdown-item" href="javascript:;">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">

            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Photo</th>
                    <th>Product ID</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Shipping</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td>Iphone 5</td>
                  <td><img src="assets/images/products/18.png" className="product-img-2" alt="product img" /></td>
                  <td>#9405822</td>
                  <td><span className="badge bg-gradient-quepal text-white shadow-sm w-100">Paid</span></td>
                  <td>$1250.00</td>
                  <td>03 Feb 2020</td>
                  <td><div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-gradient-quepal" role="progressbar" style={{width: '100%'}}></div>
                  </div></td>
                </tr>

                  <tr>
                    <td>Earphone GL</td>
                    <td><img src="assets/images/products/16.png" className="product-img-2" alt="product img" /></td>
                    <td>#8304620</td>
                    <td><span className="badge bg-gradient-blooker text-white shadow-sm w-100">Pending</span></td>
                    <td>$1500.00</td>
                    <td>05 Feb 2020</td>
                    <td><div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-gradient-blooker" role="progressbar" style={{width: '60%'}}></div>
                    </div></td>
                  </tr>

                  <tr>
                    <td>HD Hand Camera</td>
                    <td><img src="assets/images/products/19.png" className="product-img-2" alt="product img" /></td>
                    <td>#4736890</td>
                    <td><span className="badge bg-gradient-bloody text-white shadow-sm w-100">Failed</span></td>
                    <td>$1400.00</td>
                    <td>06 Feb 2020</td>
                    <td><div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-gradient-bloody" role="progressbar" style={{width: '70%'}}></div>
                    </div></td>
                  </tr>

                  <tr>
                    <td>Clasic Shoes</td>
                    <td><img src="assets/images/products/04.png" className="product-img-2" alt="product img" /></td>
                    <td>#8543765</td>
                    <td><span className="badge bg-gradient-quepal text-white shadow-sm w-100">Paid</span></td>
                    <td>$1200.00</td>
                    <td>14 Feb 2020</td>
                    <td><div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-gradient-quepal" role="progressbar" style={{width: '100%'}}></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>Sitting Chair</td>
                    <td><img src="assets/images/products/11.png" className="product-img-2" alt="product img" /></td>
                    <td>#9629240</td>
                    <td><span className="badge bg-gradient-blooker text-white shadow-sm w-100">Pending</span></td>
                    <td>$1500.00</td>
                    <td>18 Feb 2020</td>
                    <td><div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-gradient-blooker" role="progressbar" style={{width: '60%'}}></div>
                    </div></td>
                  </tr>
                  <tr>
                    <td>Hand Watch</td>
                    <td><img src="assets/images/products/17.png" className="product-img-2" alt="product img" /></td>
                    <td>#8506790</td>
                    <td><span className="badge bg-gradient-bloody text-white shadow-sm w-100">Failed</span></td>
                    <td>$1800.00</td>
                    <td>21 Feb 2020</td>
                    <td><div className="progress" style={{height: '5px'}}>
                      <div className="progress-bar bg-gradient-bloody" role="progressbar" style={{width: '40%'}}></div>
                    </div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3">
          <div className="col d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Sales This Week</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container-1">
                  <canvas id="chart16"></canvas>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center border-top">Completed
                  <span className="badge bg-gradient-quepal rounded-pill">25</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Apple
                  <span className="badge bg-gradient-ibiza rounded-pill">10</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Nokia <span className="badge bg-gradient-deepblue rounded-pill">65</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Profit Ratio</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container-1">
                  <canvas id="chart17"></canvas>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center border-top">Gross Profit <span className="badge bg-gradient-quepal rounded-pill">25</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Revenue <span className="badge bg-gradient-ibiza rounded-pill">10</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Expense <span className="badge bg-gradient-deepblue rounded-pill">65</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Trending Products</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-container-1">
                  <canvas id="chart18"></canvas>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center border-top">Jeans <span className="badge bg-gradient-quepal rounded-pill">25</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">T-Shirts <span className="badge bg-gradient-ibiza rounded-pill">10</span>
                </li>
                <li className="list-group-item d-flex bg-transparent justify-content-between align-items-center">Shoes
                  <span className="badge bg-gradient-deepblue rounded-pill">65</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-12 col-lg-7 col-xl-6 d-flex">
            <div className="card radius-10 w-100">
              <div className="card-header bg-transparent">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Top Selling Country</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">

                <div id="dashboard-map" style={{height: '210px'}}></div>

                <p><i className="flag-icon flag-icon-us me-1"></i> USA <span className="float-end">50%</span></p>
                <div className="progress" style={{height: '5px'}}>
                  <div className="progress-bar bg-gradient-moonlit" role="progressbar" style={{width: '50%'}}></div>
                </div>

                <p className="mt-3"><i className="flag-icon flag-icon-ca me-1"></i> Canada <span className="float-end">65%</span></p>
                <div className="progress" style={{height: '5px'}}>
                  <div className="progress-bar bg-gradient-ibiza" role="progressbar" style={{width: '65%'}}></div>
                </div>

                <p className="mt-3"><i className="flag-icon flag-icon-gb me-1"></i> England <span className="float-end">85%</span></p>
                <div className="progress" style={{height: '5px'}}>
                  <div className="progress-bar bg-gradient-deepblue" role="progressbar" style={{width: '85%'}}></div>
                </div>

                <p className="mt-3"><i className="flag-icon flag-icon-au me-1"></i> Australia <span className="float-end">75%</span></p>
                <div className="progress" style={{height: '5px'}}>
                  <div className="progress-bar bg-gradient-orange" role="progressbar" style={{width: '75%'}}></div>
                </div>

                <p className="mt-3"><i className="flag-icon flag-icon-in me-1"></i> India <span className="float-end">45%</span></p>
                <div className="progress" style={{height: '5px'}}>
                  <div className="progress-bar bg-gradient-quepal" role="progressbar" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5 col-xl-6 d-flex">
            <div className="card w-100 radius-10">
              <div className="card-header bg-transparent">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0">Traffic Resources</h6>
                  </div>
                  <div className="dropdown ms-auto">
                    <a className="dropdown-toggle dropdown-toggle-nocaret" href="#" data-bs-toggle="dropdown"><i className='bx bx-dots-horizontal-rounded font-22 text-option'></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="javascript:;">Action</a>
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Another action</a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li><a className="dropdown-item" href="javascript:;">Something else here</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table align-items-center table-flush align-middle">
                    <thead>
                      <tr>
                        <th>Source</th>
                        <th>Path</th>
                        <th>Visits</th>
                        <th>Trends</th>
                      </tr>
                    </thead>
                    <tr>
                      <td><i className='bx bxl-google'></i> Google</td>
                      <td>google.com</td>
                      <td>268</td>
                      <td><span className="" id="chart8"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-facebook'></i> Facebook</td>
                      <td>facebook.com</td>
                      <td>278</td>
                      <td><span className="" id="chart9"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-twitter'></i> Twitter</td>
                      <td>twitter.com</td>
                      <td>456</td>
                      <td><span className="" id="chart10"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-linkedin'></i> Linkedin</td>
                      <td>linkedin.com</td>
                      <td>352</td>
                      <td><span className="" id="chart11"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-behance'></i> Behance</td>
                      <td>behance.com</td>
                      <td>785</td>
                      <td><span className="" id="chart12"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-dribbble'></i> Dribble</td>
                      <td>dribble.com</td>
                      <td>124</td>
                      <td><span className="" id="chart13"></span></td>
                    </tr>
                    <tr>
                      <td><i className='bx bxl-github'></i> Github</td>
                      <td>github.com</td>
                      <td>560</td>
                      <td><span className="" id="chart14"></span></td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
