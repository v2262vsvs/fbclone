
import { VideoCameraIcon,CameraIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import Image  from "next/image"

import { db, storage } from '../firebase';
import {useRef,useState} from "react"

import firebase from "firebase"



function InputBox({data}) {
    const inputRef = useRef(null); 
    const filepickerRef =useRef(null);
    const [imageToPost, setImagePost] = useState(null)
    const sendPost = (e) =>{

        if(!inputRef.current.value){
            return;
        }
        db.collection('posts').add({
            message: inputRef.current.value,
            name: data.user.name,
            email : data.user.email,
            image: data.user.image ,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc =>{
            if ( imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url")
                removeImage();
                uploadTask.on('state_change',null,error => console.error(error), ()=>{
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url =>{
                        db.collection('posts').doc(doc.id).set({
                            postImage :url
                        },{merge : true})
                    })
                })
            }
        })
        e.preventDefault()

        inputRef.current.value =""
    }
    const addImageToPost =(e) => {

        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0])
        };
        reader.onload =(readerEvent) =>{
            setImagePost(readerEvent.target.result);
        };

    }
    const removeImage =(e) => {
        setImagePost(null);
    }

    return (
        <div className=" bg-white rounded-2xl h-40 p-2 shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center ">
            
                <Image
                className="rounded-full cursor-poiner"
                src={data.user.image}
                alt="Picture of the author"
                width={40}
                height={40}
                layout="fixed"
                />  
            
            <div className="flex flex-1">
                <input 
                ref={inputRef}
                type="text" 
                placeholder={`What is on your mind ,${data.user.name} ?`} 
                className=" md:inline-flex bg-gray-200 rounded-2xl h-12 flex-grow px-5 focus:outline-none outline-none bg-transparent" 
                />
                <button  type="submit" className="ml-2" onClick={sendPost} >Submit</button>
                {imageToPost&& (
                    <div onClick={removeImage} className=" flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor pointer">
                        <img  className="h-10 object-contain" src={imageToPost} alt="" />
                        <p className="text-red-500 text-xs text-center" >Remove</p>
                    </div>
                )}
                </div>
            </div>
            



            <div className="flex justify-evenly p-3 border-t ">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <VideoCameraIcon className=" h-7 text-red-500 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                
                <div onClick={()=> filepickerRef.current.click()} className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <CameraIcon className=" h-7 text-green-500 "/>
                    <p className="text-xs  sm:text-sm xl:text-base"> Photo / Video</p>
                    <input ref={filepickerRef} hidden onChange={addImageToPost} type="file"/>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <EmojiHappyIcon className=" h-7 text-yellow-300 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Activity</p>
                </div>
            </div>
        </div>
        
    )
}
export default InputBox;