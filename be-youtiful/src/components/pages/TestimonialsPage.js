import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon } from "mdbreact";

const TestimonialsPage = () => {
  return (
    <MDBContainer>
      <section className="text-center my-5">
        <h2 style={headers}>
          Testimonials
        </h2>
        <p className="w-responsive" style={textOnly}>
          Here is what our clients say about be-youtiful nails services
        </p>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <div className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <MDBIcon icon="quote-left" className="pr-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur
                  adipisicing elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              <div className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Neque cupiditate assumenda in maiores repudiandae mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
            <MDBCard testimonial>
              
              <div className="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  alt=""
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  <i className="fa fa-quote-left pr-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

const headers = {
  fontFamily: 'myriad-pro-bold',
  fontStyle: 'normal',
  fontWeight: 800
}

const textOnly = {
  fontFamily: 'minion-pro-italic',
  fontStyle: 'normal',
  fontWeight: 700
}
export default TestimonialsPage;