const Main = () => {
    return (
        <main className="flex justify-center flex-1">
            <div className="w-full max-w-[1120px] flex flex-col items-center justify-around gap-[30px] px-[10px] py-[10px]">
                <MainHero />
            </div>
        </main>
    )
}

const MainHero = () => {
    return (
        <div className="flex items-center">
            <img src="/logo.png" alt="CO2M's logo" />
        </div>
    )
}

export default Main;