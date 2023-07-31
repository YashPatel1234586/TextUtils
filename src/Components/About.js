import React from 'react';

export default function About(props) {

    return (
        <div className="container">
            <h2 className='my-4 text-white '>About</h2>
     
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong className='color:white'>React  TextUtils  App</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It is a react app named as Text-Utils. It has various functionality to manipulate text accorning to need of the user. It has both dark and light mode with react router for easy transition
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}