import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { authformpost, formpost } from '../../utils/service';
import { checkAuth } from '../../utils/auth';

function AddCategory() {

  function categorySubmit(e)
  {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    console.log(localStorage.getItem("name"))
    authformpost("/api/category", data)
      .then((response) => {
        if (response) {
          console.log(response.data);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div className="page-wrapper">
      <div className="page-content">

        <div id="stepper2" className="bs-stepper">
          <div className="card">

            <div className="card-header ">
              <div className="col-12">
                <div className="d-flex align-items-center gap-3">
                  <h5 className="mb-0 steper-title">Add Category</h5>

                </div>
              </div>
            </div>
            <div className="card-body">

              <div className="bs-stepper-content">
                <form onSubmit={categorySubmit}>
                  <div id="test-nl-4" role="tabpanel" className="bs-stepper-pane"
                    aria-labelledby="stepper2trigger4">

                    <div className="row g-3">
                      <div className="col-12 col-lg-4">
                        <label htmlFor="catName" className="form-label">Category Name</label>
                        <input type="text" className="form-control" id="catName" name='catName' placeholder="Experience 1" />
                      </div>

                      <div className="col-md-4">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select id="status" name='status' className="form-select">
                          <option >select...</option>
                          <option value={1}>Yes</option>
                          <option value={0}>No</option>
                          
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center gap-3">
                          <Link className="btn btn-danger px-4" to="/category">
                            <i className='bx bx-left-arrow-alt me-2'></i>Cancel
                          </Link>
                          <button className="btn btn-success px-4" type='submit' >Submit</button>
                        </div>
                      </div>
                    </div>

                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
