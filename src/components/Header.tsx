import email from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'

export const Header = () => {
  return (
    <>
        <div className="navbar bg-base-100 px-5 flex gap-4 flex-wrap justify-center md:justify-start">
            <span className='flex gap-1'>
                <img src={email} alt="" className='w-4 md:w-5'/>
                <p className='text-sm md:text-base'>correo@correo.com</p>
            </span>
            <span className='flex gap-1'>
                <img src={phone} alt="" className='w-4 md:w-5'/>
                <p className='text-sm md:text-base'>+54 11 9999-9999</p>
            </span>
        </div>
    
        <div className="navbar bg-base-100 sticky top-0 z-10">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Inicio</a></li>
                <li><a>Sobre nosotros</a></li>
                <li>
                <a>Solicitar presupuesto</a>
                <ul className="p-2">
                    <li><a>Whatsapp</a></li>
                    <li><a>Email</a></li>
                </ul>
                </li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Logo</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Inicio</a></li>
            <li><a>Sobre nosotros</a></li>
            <li tabIndex={0}>
                <details>
                <summary>Solicitar presupuesto</summary>
                <ul className="p-2">
                    <li><a>Whatsapp</a></li>
                    <li><a>Email</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
    </>
  )
}
