import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation'
import Searchbar from './Searchbar'
const Header = () => {
    return (
        <header className="shadow fixed top-0 left-0 w-full z-[1000] bg-white">
            <div className="container mx-auto max-w-5xl flex flex-1 flex-col gap-4 px-[15px] py-4">
                <div className='flex flex-1 justify-between gap-4'>
                    <div className="logo flex gap-2 items-center">
                        <Link href="/" className='flex gap-2 items-center'>
                            <Image src="/assets/logo.svg" width={42} height={42} alt='logo' />
                            <h1 className='hidden sm:block font-extrabold font text-2xl'>Y Store</h1>
                        </Link>
                    </div>
                    <Navigation />
                </div>
                <div>
                <Searchbar />
                </div>
            </div>
        </header>
    )
}

export default Header