import sections from "../data/SECTIONS";





export default function Menu({ 
    setSection, 
    setPage, 
    setAction 
}) {


    
    return (
        <div>
            <div className="menu">
            <ul>
                {sections.map((item) => (
                <li key={item.key}>
                    <button
                    onClick={() => {
                        setSection(item);
                        setPage(1);
                        setAction("watch")
                    }}
                    >
                    {item.label}
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </div>
    );
}