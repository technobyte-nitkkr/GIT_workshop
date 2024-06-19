export default function Button({ text, redirect }) {
    return (
        <button 
            className="button p-2 border border-yellow-500 rounded-md hover:bg-yellow-800 hover:text-white transition-all"
            onClick={() => {
                window.open(redirect, '_blank');
            }}
        >{text}</button>
    );
}