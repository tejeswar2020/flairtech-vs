import React from 'react'

function Presentation(props){
    console.log(props)
    const { handleChange,login }=props
    return(
        <div className="background-set border">
            
            <div className="login-form card bg-light">
                <div className="login-head p-3 rounded border bg-white">
                    <h2 style={{fontWeight:"300",textAlign:"center"}}>Login</h2>
                </div>
                <div className="card-body ">
                <form onSubmit={login} className="form">
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" id="email" onChange={handleChange} placeholder="Enter Email" name="email" required/>
                </div>
                <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pass" onChange={handleChange} placeholder="Enter password" name="pswd" required/>
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>
                </form>
                </div>
    </div>
           
        </div>
    )
}

export default Presentation