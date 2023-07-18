import React from 'react'
import { Link } from 'react-router-dom'

function EditsSubSubCategory() {
  return (
    <div className="page-wrapper">
    <div className="page-content">

      <div id="stepper2" className="bs-stepper">
        <div className="card">

          <div className="card-header ">
            <div className="col-12">
              <div className="d-flex align-items-center gap-3">
                <h5 className="mb-0 steper-title">Edit Sub-Sub-Category</h5>
                
              </div>
            </div>
          </div>
          <div className="card-body">

            <div className="bs-stepper-content">
              <form onSubmit="return false">
                <div id="test-nl-4" role="tabpanel" className="bs-stepper-pane"
                  aria-labelledby="stepper2trigger4">

                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <label for="Experience1" className="form-label">Experience 1</label>
                      <input type="text" className="form-control" id="Experience1"
                        placeholder="Experience 1" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label for="Position1" className="form-label">Position</label>
                      <input type="text" className="form-control" id="Position1"
                        placeholder="Position" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label for="Experience2" className="form-label">Experience 2</label>
                      <input type="text" className="form-control" id="Experience2"
                        placeholder="Experience 2" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label for="PhoneNumber" className="form-label">Position</label>
                      <input type="text" className="form-control" id="PhoneNumber"
                        placeholder="Position" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label for="Experience3" className="form-label">Experience 3</label>
                      <input type="text" className="form-control" id="Experience3"
                        placeholder="Experience 3" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label for="PhoneNumber" className="form-label">Position</label>
                      <input type="text" className="form-control" id="PhoneNumber"
                        placeholder="Position" />
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center gap-3">
                        <Link className="btn btn-danger px-4"
                          to="/category"><i
                            className='bx bx-left-arrow-alt me-2'></i>Cancel</Link>
                        <button className="btn btn-success px-4"
                          onclick="stepper2.next()">Submit</button>
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

export default EditsSubSubCategory
