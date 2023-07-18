import React from 'react'
import { Link } from 'react-router-dom'

function SubSubCategory() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
          <div className="breadcrumb-title pe-3">Tables</div>
          <div className="ps-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 p-0">
                <li className="breadcrumb-item"><a href="javascript:;"><i className="bx bx-home-alt"></i></a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Sub-Sub-Category</li>
              </ol>
            </nav>
          </div>
          
        </div>
        
        <div className="card-header ">
               <div className="col-12">
                 <div className="d-flex align-items-center gap-3">
                   <h5 className="mb-0 steper-title">Sub-Sub-Category</h5>
                   <Link className="btn btn-primary px-4"
                    to="/add-subsubcategory">Add Sub-Sub-Category</Link>
                 </div>
               </div>
            </div>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table id="example" className="table table-striped table-bordered" style={{width:'100%'}}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SubSubCategory
