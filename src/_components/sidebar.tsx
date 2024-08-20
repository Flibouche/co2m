const Sidebar = () => {
    return (
        <nav className="fixed h-full flex flex-col items-center justify-end space-y-6 text-white w-16 z-10">
            <ul className="flex flex-col items-center font-montserrat space-y-32">
                <li className="transform -rotate-90 text-center text-sm lg:text-lg tracking-wider">
                    A propos
                </li>
                <li className="transform -rotate-90 text-center text-sm lg:text-lg tracking-wider">
                    Services
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
