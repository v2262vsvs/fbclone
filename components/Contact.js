import Image from "next/image"


function Contact({src,name}) {
  return (
    <div className="flex  items-center hover:bg-gray-200 rounded-xl space-x-3 mb-2 relative p-2 cursor-pointer w-full ">
        <Image
            className="rounded-full cursor-poiner"
            src={src}
            alt="Picture of the author"
            width={50}
            height={50}
            layout="fixed"
            /> 
        <p>{name}</p> 
        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce"/>
    </div>
  )
}

export default Contact