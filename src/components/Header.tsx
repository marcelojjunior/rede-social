import bird from '../assets/images/bird.png';

export function Header() {
    return (
        <header 
            className="bg-gray-300 flex justify-center py-5 text-white"
        >
            <img
                className='w-12'
                src={bird} 
                alt="Logo Header" 
            />
        </header>
    );
}