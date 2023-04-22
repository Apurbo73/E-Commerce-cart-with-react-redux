import React from "react";

const CardDetails = () => {
  return (
    <div style={{ marginBottom: 200 }}>
      <h4 className="shadow-lg p-3 mb-5 bg-secondary text-light text-center mx-auto mt-3 rounded w-25">
        Product Detail
      </h4>
      <div className="card mx-auto w-75">
        <img
          src="https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg"
          className="mx-auto mt-3"
          alt="..."
          style={{ width: 300 }}
        />
        <div className="card-body">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Restaurant</th>
                <th scope="col">Dish</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th scope="col">Total Bill</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-secondary text-light">Mark</td>
                <td className="bg-secondary text-light">Otto</td>
                <td className="bg-secondary text-light">@mdo</td>
                <td className="bg-secondary text-light">5<i className="fas fa-star"></i></td>
                <td className="bg-secondary text-light">@mdo</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center">
            <div
              className="btn-group mt-5 mb-3 "
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button type="button" className="btn btn-danger m-1">
                -
              </button>
              <button type="button" className="btn btn-primary m-1">
                quantity
              </button>
              <button type="button" className="btn btn-success m-1">
                +
              </button>
              <button type="button" className="btn btn-warning m-1">
                <i className="fas fa-trash"> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
