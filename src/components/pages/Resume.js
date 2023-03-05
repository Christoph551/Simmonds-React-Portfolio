

function Resume() {
    return (
        <>
            <div className="container">
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <button download="resume.pdf" className="btn btn-primary" style={{
                        margin: "20px",
                    }}>Download Resume</button>
                        
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Resume;