import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Jobss = () => {
    const [jobs, setJobs] = useState([]); // State to hold job data
    const [error, setError] = useState(''); // State to handle errors

    // Fetch jobs from the server
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/jobs');
                setJobs(response.data); // Update state with fetched jobs
            } catch (err) {
                console.error('Error fetching jobs:', err);
                setError('Failed to fetch jobs. Please try again.');
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center text-primary">Available Jobs</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={job.jobId}>
                            <div
                                className={`card h-100 shadow-lg rounded-lg ${index % 2 === 0 ? 'bg-warning' : 'bg-info'} text-white`}
                            >
                                <div className="card-body">
                                    <h4 className="card-title text-uppercase font-weight-bold">{job.JOBTITLE}</h4>
                                    <p className="card-text">{job.JOBDISC}</p>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text text-light">
                                            <strong>Company:</strong> {job.COMPANY}
                                        </p>
                                        <p className="card-text text-light">
                                            <strong>Location:</strong> {job.LOCATION}
                                        </p>
                                    </div>
                                    <p className="card-text text-light">
                                        <strong>Posted On:</strong> {new Date(job.POSTEDDATE).toLocaleDateString()}
                                    </p>
                                    <button className="btn btn-light mt-3">Apply Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No jobs available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default Jobss;
