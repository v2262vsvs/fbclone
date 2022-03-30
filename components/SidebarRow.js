import Image from "next/image"


function SidebarRow({pic , Icon , title}) {
    return (
        <div className="flex items-center hover:bg-gray-200 rounded-xl space-x-2 p-4 cursor-pointer w-5/12 ">
            {pic && (
                <Image
                src={pic.user.image}
                className=" rounded-full"
                alt="Picture of the author"
                width={30}
                height={30}
                layout="fixed" 
                />
            )}
            {Icon && (
                <Icon className=" h-8 w-8 text-blue-500"/>
            )}
            <p  className="hidden md:inline-flex font-medium">{title}</p>
        </div>
    )
    
}

export default SidebarRow;