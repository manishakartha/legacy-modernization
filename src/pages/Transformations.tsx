import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Topbar from '../components/Topbar'

const accordionData = [
    {
        title: "1. Input Data Source",
        content: `ODBC: Hana Prod

Purpose: Pulls last three months sales and line totals at delivery-note level for OCT_, TCO_, Terms and Conditions applications, and ad-hoc analysis. Refreshed monthly.
Connection Type: ODBC
Location: Hana Universe
Schema: 

Fields:
SO_: AUDAT: Sales order date
VKDAT: Pricing date
VKBUR: Sales Office
... (rest of the text you showed)`
    },
    {
        title: "2. Transformations (Ordered)",
        content: "This section will show transformation logic in execution order."
    },
    {
        title: "3. Custom Calculations",
        content: "This section lists any custom logic manually inserted by analysts."
    },
    {
        title: "4. Output Data Sources",
        content: "This section documents the destinations of the transformed data."
    }
]

export default function Transformations() {
    return (
        <div className="flex-1 overflow-y-auto bg-gray-100">
            <Topbar heading={'Transformations'} />
            <div className="w-full max-w-4xl mx-auto p-4">
                {accordionData.map((item, index) => (
                    <Disclosure key={index} defaultOpen={index === 0}>
                        {({ open }) => (
                            <div className="mb-2 border border-gray-300 rounded-lg">
                                <DisclosureButton className="flex w-full justify-between rounded-t-lg bg-blue-100 px-4 py-3 text-left text-sm font-medium text-blue-900 hover:bg-blue-200">
                                    <span>{item.title}</span>
                                    <ChevronUpIcon className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                                </DisclosureButton>
                                <DisclosurePanel className="px-4 py-4 text-sm text-gray-800 whitespace-pre-line bg-white rounded-b-lg">
                                    {item.content}
                                </DisclosurePanel>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}
