export default function Header({title}: {title: string}){
    return (
        <header className="
        bg-gray 
        text-white 
        p-4 w-full 
        flex 
        items-center 
        justify-center
        sticky
        top-0
        left-0
        z-50 
        h-16
        "
        
        
        >
        <h1 className="text-xl font-bold">{title}</h1>
        </header>
    )

}