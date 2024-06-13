export default function Header({text}) {
    return (
        <div className="header h-[10svh] flex items-center justify-center border-b border-yellow-300">
            <span className="text-3xl font-bold font-mono">{text}</span>
        </div>
    )
}