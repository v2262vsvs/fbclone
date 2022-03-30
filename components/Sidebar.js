
import { CalendarIcon,ClockIcon,DesktopComputerIcon,UserIcon } from '@heroicons/react/solid'

import { ChevronDownIcon } from '@heroicons/react/outline'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { UserGroupIcon } from '@heroicons/react/outline'

import SidebarRow from './SidebarRow'

function Sidebar({data}) {

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-x-[300px]">
            <SidebarRow pic={data} title={data.user.name}/>

            <SidebarRow Icon={UserIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See more"/>
           
        </div>
    )
}
export default Sidebar;