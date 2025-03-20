import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { paths } from '../routes/paths'

interface IHeaderTab{
    showModal: () => void;
    btnText:string;
}

export default function HeaderTab({showModal,btnText}:IHeaderTab) {
    const [showFilterOptions, setShowFilterOptions] = useState(false)
    const filterOptions = ["Alphabetically", "Newest", "Oldest", "Ongoing", "Closed", "Cancelled", "Completed"]
    return (
        <div className='w-full h-[80px] flex justify-between items-center px-8 rounded-2xl bg-white'>
            <div>
                <input type="text" className='w-[14rem] focus:outline-none bg-[#DDF6E85E] rounded-md h-[50px] p-3' placeholder='Search students' />
            </div>

            <div className='flex justify-between items-center gap-12'>
                <div className='flex relative justify-start gap-3 items-center'>
                    <p className='text-sm'>Newest</p>
                    <FaChevronDown size={15} cursor={'pointer'} onClick={() => setShowFilterOptions(!showFilterOptions)} />

                    {showFilterOptions && <div className='w-[350px] -left-28 top-12 z-50 absolute p-4 bg-white shadow rounded-2xl border-[#12A454] border flex justify-start gap-3 items-center flex-wrap'>
                        {
                            filterOptions.map((option) => (
                                <div className='px-4 py-1 text-sm rounded-2xl border border-[#12A454] text-[#12A454]'>
                                    {option}
                                </div>
                            ))
                        }
                    </div>
                    }

                </div>

                <button className='px-6 py-2 rounded-md bg-[#12A454] text-sm text-white cursor-pointer' onClick={showModal}>{btnText}</button>
            </div>



        </div>
    )
}
