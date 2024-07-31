import user from '../assets/photo.png'

export const Navbar = () => {
    return (
        <header className="ml-48 sticky top-0 z-999 flex w-full bg-[#F7F8FC]">
            <div className="flex flex-grow items-center justify-between p-5 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center">
                    <h3 className='text-[#252733] text-[24px]'>Overview</h3>
                </div>

                <div className='flex items-center'>
                    <h4>Jones Ferdinand</h4>
                    <img src={user} alt="" className='ml-2'/>
                </div>
            </div>
        </header>
    )
}
