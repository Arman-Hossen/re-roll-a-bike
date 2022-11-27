import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const {createUser,updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if(token){
        navigate('/')
    }
    

    const handleSignUp = (data) =>{
        setSignUpError('');

        
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() =>{
                // navigate('/');
            })
            .catch(err => console.log(err))
        })
        .catch(error => {
            console.log(error);
            setSignUpError(error.message);
        });
        const name = data.name;
        const email = data.email;
        const role = data.userType;
        const signupUser = {
            name,
            email,
            role,
        }
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signupUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){

                setCreatedUserEmail(email);
                
                toast.success("SignUp successfuly");
            }
        })

    }

    return (
        <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-4xl text-center font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs"/>
            </div>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Email</span></label>
                <input type="email" {...register("email",{
                    required: true
                })} className="input input-bordered w-full max-w-xs"/>
            </div>
          <div className="form-control w-full max-w-xs">
                <label className="label"><span className="label-text">Password</span></label>
                <input type="password" {...register("password",{
                    required: "Password is required",
                    minLength:{value: 6, message: 'Password must be 6 charecter or more'},
                    pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be one Upper case and special charachter and one number"}
                })} className="input input-bordered w-full max-w-xs"/>
                {errors.password && <p className="text-red-600 font-semibold">{errors.password?.message}</p>}
            </div>

            <div className="form-control w-full max-w-xs mt-3 bordered">
            <select className="bordered" {...register("userType", { required: "Selected UserType" })}>
                <option selected value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
            </select>
            {errors.userType && <p className="text-red-600 font-semibold">{errors.userType?.message}</p>}
            
            </div>
          <input className="btn btn-primary w-full mt-5" value="Login" type="submit" />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>Already have an account? <Link className="text-green-400" to='/login'>Please Login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default SignUp;