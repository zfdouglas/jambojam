interface DiscreteTimeBoxProps {
    time: number
    timeUnit: string
}
export const DiscreteTimeBox = ({time, timeUnit}: DiscreteTimeBoxProps) => {
    return(
        <div className={'w-1/5 flex flex-wrap place-content-center flex-row'}>
            <div className={'flex w-full  py-5 px-0 place-content-center'}>
                <div className={'flex w-1/2 bg-cBackground/25 text-3xl place-content-center text-tPrimary font-bold px-8 py-5'}>{time}</div>
            </div>
            <div className={'w-3/4 text-[12px] lg:text-lg xl:lg 2xl:lg mt-1 font-semibold text-tAccent bg-cBackground/50 rounded p-1'}>{timeUnit}</div>
        </div>
    )
}