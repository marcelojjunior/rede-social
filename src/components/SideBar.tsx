import { PencilLine } from 'phosphor-react'
import coverProfile from '../assets/images/cover-profile.jpg';
import imageProfile from '../assets/images/marcelojunior.jpeg'
import { Avatar } from './Avatar';

export function Sidebar(){
    return (
        <aside
            className="bg-gray-300 rounded-lg overflow-hidden text-white"
        >
            <img 
                className='w-full h-20 object-cover'
                src={coverProfile} 
            />
            <div className='flex flex-col items-center -mt-7'>
                <Avatar
                    src={imageProfile}
                />
                <strong
                    className='mt-4 text-gray-700'
                >
                    Marcelo Junior
                </strong>
                <span
                    className='text-gray-500 text-sm'
                >
                    Web Developer
                </span>
            </div>
            <footer 
                className='mt-6 border-t border-solid border-gray-200 pt-6 pb-8 px-8'
            >
                <a 
                    href="#"
                    className='w-full bg-transparent text-blue-100 border border-solid border-blue-100 px-3 py-2 rounded-lg font-bold flex justify-center items-center gap-3 hover:bg-blue-100 hover:text-white'
                >
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}