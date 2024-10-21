import React from 'react'

const Jumbotron = () => {
    const Nombre = "alexander"
    return (
        <div>
        <div className="p-5 mb-4 bg-light rounded-3 mt-4">
        <div className="container-fluid m-5">
          <h1 className="display-5 fw-bold">A Warm  Welcome!
            {Nombre}
          </h1>
          <p className="col-md-8 fs-4 text-break">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita impedit modi, maiores veniam, officia aspernatur nesciunt quos architecto, saepe esse. Necessitatibus numquam veniam excepturi aliquam beatae, neque reiciendis alias.</p>
          <button class="btn btn-primary btn-lg text-start" type="button"> Call to action!</button>
        </div>
      </div>
      </div>
    )
}

export default Jumbotron