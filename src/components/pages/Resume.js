import MyResume from "../../resume/resume.pdf";
import Paper from '@mui/material/Paper';

function Resume() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Paper

                sx={{
                    p: 2,
                    marginTop: 10,
                    maxWidth: 1000,
                    flexGrow: 1,
                    color: 'white',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? '#b48b7d' : '#fafffd',
                    opacity: '75%'
                }}
            >
                <div className="container">
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: 'column'
                    }}>
                        <button className="btn btn-secondary" style={{
                            margin: "20px",
                            backgroundColor: '#56351e'
                        }}><a
                            href={MyResume}
                            style={{ color: 'white' }}
                            download="../../resume/resume.pdf"
                        >
                                Download My Resume Here
                            </a>
                        </button>

                        {/* Start of front-end tech */}
                        <ul class="list-group list-group-flush">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: 20,
                                }}>
                                <h3 style={{
                                    color: '#56351e',
                                    listStyle: 'none',
                                    borderBottom: '1px solid #b48b7d',
                                }}>
                                    Front-End Proficiencies
                                </h3>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">HTML5</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">CSS</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">JavaScript</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">JQuery</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">Responsive Design</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">React</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">Bootstrap</li>
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Start of back-end tech */}
                <div className="container">
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>

                        <ul class="list-group list-group-flush">
                            <h3 style={{
                                color: '#56351e',
                                listStyle: 'none',
                                borderBottom: '1px solid #b48b7d',
                            }}>
                                Back-End Proficiencies
                            </h3>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">RESTful APIs</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">MERN Stack</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">Node.js</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">Express.js</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">MySQL and Sequelize</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">MongoDB and Mongoose</li>
                            </div>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <li className="list-item">GraphQL</li>
                            </div>
                        </ul>

                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default Resume;