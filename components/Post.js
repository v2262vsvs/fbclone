import firebase from 'firebase';
import Image from "next/image"
import { ChatAltIcon,ShareIcon,ThumbUpIcon } from '@heroicons/react/outline'

import {TrashIcon} from '@heroicons/react/outline'

function Post({data,name,message,email,postImage,timestamp,id}) {
   // posts?.map(post =>{
   //     console.log(post.id)
   // })
    console.log(id);
    const deleteStorage = (id, collection) => {
        firebase
          .firestore()
          .collection(collection)
          .doc(id)
          .delete()
    }

    const pic=data.user.image;
  return (
    <div className="flex flex-col mt-5">
    <div className="bg-white p-5 rounded-t-2xl shadow-sm">
        <div className="flex  items-center space-x-2">
            <Image
                className="rounded-full cursor-poiner"
                src={pic}
                alt="Picture of the author"
                width={40}
                height={40}
                layout="fixed"
                />  
            <div>
                <div className="font-bold">{name}</div>
                {timestamp ? (
                     <div className="text-sm text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()} </div>

                ) : (
                    <div className="text-sm text-gray-400">Loading ... </div>
                    )}
            </div> 
            <div className="w-60"></div>
            <div className="w-20"></div>
            
            <div className="flex space-x-1 hover:bg-gray-100  justify-center p-1  w-14 rounded-xl cursor-ponter">
                <TrashIcon onClick={() => deleteStorage(id, "posts")} className=" h-7 text-gray-500 "/>  
            </div>
        </div>
        <div>
            <div className="pt-4 ">{message}</div>
        </div>
        
            {postImage && (
            <div className="relative h-56 md:h-96 bg-white">
            <Image 
                src={postImage} 
                
                layout="fill"
                objectFit="cover"
                
                />
            </div>
            )}
        
        <div className="flex justify-between items-center rounded-b-2xl bg-white mt-3 border-t p-3 shadow-md text-gray-400  ">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <ChatAltIcon className=" h-7 text-gray-500 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Like</p>
                </div>
                
                <div  className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <ShareIcon className=" h-7 text-gray-500 "/>
                    <p className="text-xs  sm:text-sm xl:text-base">Comment</p>
                    {/*<input ref={} hidden onChange={} type="file"/>*/}
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-ponter">
                    <ThumbUpIcon className=" h-7 text-gray-500 "/>
                    <p className="text-xs sm:text-sm xl:text-base">Share</p>
                </div>
        </div>
        
    </div>           
    </div>
  )
}

export default Post