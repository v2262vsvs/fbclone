import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon,VideoCameraIcon } from '@heroicons/react/solid'
import Contact from "./Contact"
const contacts =[
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},
    {src : "https://links.papareact.com/f0p",name: "Jeff Bezoz"},

];

function Widgets() {
  return (
    <div className="hidden border-t lg:flex flex-col w-60 p-2 mt-5">
        <div className="flex justify-between items-center text-gray-500 mb-5">
            <h2 className="text-lg semi-bold text-gray-500 mr-20">Contacts</h2>
            <div className="flex">
                <DotsHorizontalIcon className=" h-7 text-gray-500 "/>
                <VideoCameraIcon className=" h-7 text-gray-500 "/>
            <SearchIcon className=" h-7 text-gray-500 "/>
            </div>  
        </div>
            {contacts.map(contact =>(
                <Contact key={contact.src} src={contact.src} name={contact.name} />
            ))}
        
       
        
    </div>
  )
}

export default Widgets