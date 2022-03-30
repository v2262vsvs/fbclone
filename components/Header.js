import Image from "next/image"
import HeaderIcon from "../components/HeaderIcon"

import { BellIcon, ChatIcon, ChevronDownIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/outline'
import { FlagIcon } from '@heroicons/react/outline'
import { PlayIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { UserGroupIcon } from '@heroicons/react/outline'
import { signOut} from 'next-auth/react';

function Header({data}) {
    //console.log(data)
  //  const [session,loading] = useSession();
  //let image="/userlogo.png"
  let image = null
  if (!data){
    image="/userlogo.png"
  }else { image = data.user.image}
    return(
        
        <div className=" sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* left */}
                <div className="flex items-center">
                <Image
                src="/fblogo.png"
                alt="Picture of the author"
                width={40}
                height={40}
                layout="fixed"
                />
        
                <div className=" flex p-2 ml-2  items-center bg-gray-100 rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-500"/>
                <input type="text" placeholder="Search Facebook" className="hidden md:inline-flex bg-gray-100  ml-2 outline-none bg-transparent"/>
                </div>

                </div>
            
            {/* center */}
            <div className=" flex  justify-center  flex-grow place-items-center content-center items-center  ">
                <div className=" flex space-x-6 md:space-x-2 ">
                    <div className="inline-block"><HeaderIcon  active={true} Icon={HomeIcon}/></div>
                    <div className="inline-block"><HeaderIcon  Icon={FlagIcon}/></div>
                    <div className="inline-block"><HeaderIcon  Icon={PlayIcon}/></div>
                    <div className="inline-block"><HeaderIcon  Icon={ShoppingCartIcon}/></div>
                    <div className="inline-block"><HeaderIcon  Icon={UserGroupIcon}/></div>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center  sm:space-x-2 justify-end  ">
                <Image
                onClick={signOut}
                className="rounded-full cursor-poiner"
                src={image}
                alt="Picture of the author"
                width={40}
                height={40}
                layout="fixed"
                />    
                <p className="whitespace-nowrap font-semibolt pr-3">{data.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
        
    )
}
export default Header