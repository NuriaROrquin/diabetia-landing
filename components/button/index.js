export const ButtonBlue = ({label, width, onClick, className}) => {
    return (
        <div className={`flex justify-center ${width} ${className}`}>
            <button
                onClick={onClick}
                className="bg-blue-primary hover:bg-blue-focus transition-all text-white py-2 px-8 rounded-full w-full"
            >
                {label}
            </button>
        </div>
    )
}

export const ButtonOrange = ({label, width, onClick}) => {
    return (
        <div className={`flex justify-center ${width}`}>
            <button
                onClick={onClick}
                className="bg-orange-focus hover:bg-orange-primary transition-all text-white py-2 px-8 rounded-full w-full"
            >
                {label}
            </button>
        </div>
    )
}