import { useState } from "react"

export default function Login() {

    const [companyId, setCompanyId] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    function 
    



    return (
        <div className="">
           <div>N° da empresa: </div><input type="text" name="companyId" />
           <div>Usuário:</div> <input type="text" name="username" />
           <div>Senha:</div> <input type="password" name="password"/>
           <div></div> <button type="button">Login</button>
        </div>
    )
}
