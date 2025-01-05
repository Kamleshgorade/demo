import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobPost = () => {
    const getTodayDate = () => new Date().toISOString().split('T')[0];

    const [job, setJob] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        postedDate: getTodayDate(), // Default to today
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        try {
            // Update the fields to match what the backend expects
            const payload = {
                JOBTITLE: job.title,
                JOBDISC: job.description,
                COMPANY: job.company,
                LOCATION: job.location,
                POSTEDDATE: job.postedDate,
            };

            await axios.post('http://localhost:5000/api/jobs', payload);
            setMessage('Job posted successfully!');
            setJob({ title: '', description: '', company: '', location: '', postedDate: getTodayDate() }); // Reset form
        } catch (err) {
            console.error(err);
            setError('Failed to post job. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Post a Job</h1>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="title" className="form-label">Job Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={job.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            value={job.company}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Job Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={job.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={job.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="postedDate" className="form-label">Posted Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="postedDate"
                            name="postedDate"
                            value={job.postedDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Post Job</button>
            </form>
        </div>
    );
};

export default JobPost;
