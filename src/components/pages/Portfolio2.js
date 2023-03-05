export default function Portfolio2(props) {
    return (
        <>
        {props.projects.map(item=> (
            <div>
                <p>{item.title}</p>
            </div>
        ))}
        </>
    )
}