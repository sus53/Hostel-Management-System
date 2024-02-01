import React, { useState } from 'react'
import './User.scss'

function ResetPassword() {

    const [passwords, setPasswords] = useState({})

    const resetPasswordHandler = () => {

    }

    return (
        <div className='reset-password'>
            <form>
                <input type="text" name="password" id='password' required='required' onChange={(e) => setPasswords({ ...passwords, [e.target.name]: e.target.value })} />
                <label>Password</label>
                <input type="text" name="cpassword" id='password' required='required' onChange={(e) => setPasswords({ ...passwords, [e.target.name]: e.target.value })} />
                <label>Confirm Password</label>
                <button onClick={resetPasswordHandler}>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword