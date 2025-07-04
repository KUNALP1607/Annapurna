import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src="https://images.unsplash.com/photo-1672477179695-7276b0602fa9?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <p className="card-text">This is some Important text.</p>

            <div className='container' w-100>
              <select className='m-2 h-100 bg-success rounded' style={{ backgroundColor: '#20c997' }}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                  )
                })}
              </select>

              <select className='m-2 h-100 bg-success rounded' style={{ backgroundColor: '#20c997' }}>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className='d-inline h-100 fs-5'>
                Total Price
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
