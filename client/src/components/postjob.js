import React from 'react';
// import '../CSS/postjobs_bootstrap.min.css';
import '../CSS/postjobs_fstyle.css';
import '../CSS/postjobs_style.css';
export const Postjobs = () => {
  return (
    <>
      <html>
        <head>
          <meta charset='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap'
            rel='stylesheet'
          />

          <link rel='stylesheet' href='../CSS/postjobs_bootstrap.min.css' />

          <link rel='stylesheet' href='../CSS/postjobs_fstyle.css' />

          <link rel='stylesheet' href='../CSS/postjobs_style.css' />

          <title>Post Job</title>
        </head>
        <body>
          <div className='content'>
            <div className='container'>
              <div className='row align-items-stretch justify-content-center no-gutters'>
                <div className='col-md-7'>
                  <div className='form h-100 contact-wrap p-5'>
                    <h2 className='text-center'>Post New Job</h2>
                    <form
                      className='mb-5'
                      method='post'
                      id='jobForm'
                      name='jobForm'
                    >
                      <div className='row'>
                        <div className='col-md-12 form-group mb-3'>
                          <label for='' className='col-form-label'>
                            Name of the Company
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            name='name'
                            id='name'
                            placeholder='Company name'
                            required
                          />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-12 form-group mb-3'>
                          <label for='budget' className='col-form-label'>
                            Job Profile
                          </label>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Job Profile'
                            className='form-control'
                            required
                          />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-12 form-group mb-3'>
                          <label for='budget' className='col-form-label'>
                            Campus Requisition file of Company
                          </label>
                          <input
                            type='file'
                            className='form-control'
                            required
                          />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-12 form-group mb-3'>
                          <label for='budget' className='col-form-label'>
                            JD of the company
                          </label>
                          <input type='file' className='form-control' />
                        </div>
                      </div>

                      <div className='row justify-content-center'>
                        <div className='col-md-5 form-group text-center'>
                          <input
                            type='submit'
                            value='Submit'
                            className='btn btn-block btn-primary rounded-0 py-2 px-4'
                          />
                          <span className='submitting'></span>
                        </div>
                      </div>
                    </form>

                    <div id='form-message-warning mt-4'></div>
                    <div id='form-message-success'>Job posted.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
