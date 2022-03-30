import Image from "next/image"
import {signIn} from "next-auth/react"

function Login() {
    return (
        <div className="flex justify-center ">
            <div className="">
            <Image
            src="/fblogo.png"
            alt="Picture of the author"
            width={300}
            height={300}
            objectFit="contain"
            />
            <h1 onClick={signIn} className="text-center px-20 bg-blue-500 cursor-pointer w-fit p-5 rounded-full text-white ">Login with Facebook</h1>
        </div>
       
        </div>
    )
    
}
export default Login;