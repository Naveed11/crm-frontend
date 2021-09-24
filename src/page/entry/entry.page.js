import React,{useState} from 'react'
import { Jumbotron } from 'react-bootstrap';
import '../../page/entry/entry.style.css';
import LoginForm from '../../components/Login.comp';
import PasswordResetForm from '../../components/PasswordReset.comp';
const Entry = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [frmLoad,resetFromLoad] = useState("login");
    const handleOnSubmit = e=>{
        e.preventDefault();
        if(!email || !password){
           return alert("All Fields are required");
           
        }
        console.log(email,password)
    }
    const handleOnResetPassword = e=>{
        e.preventDefault();
        if(!email ){
           return alert("All Fields are required");
           
        }
        console.log(email)
    }
    const handleOnChange= (e)=>{
       const {name,value} = e.target;
       switch(name)
       {
           case "email":
            setEmail(value);
            break;

            case "password":
            setPassword(value);
            break;
       }
      
    }

    const handleSwitcher = type=>{
        resetFromLoad(type)
    }
    return (
        <div className="entry-page bg-info">
            <Jumbotron >
                {
                    frmLoad === "login" ? <LoginForm handleSwitcher={handleSwitcher} handleOnChange={handleOnChange} email={email} password={password} handleOnSubmit={handleOnSubmit}/> : <PasswordResetForm handleSwitcher={handleSwitcher} handleOnChange={handleOnChange} email={email}  handleOnResetPassword={handleOnResetPassword}/>
                }
                
                

            </Jumbotron>
        </div>
    )
}

export default Entry
