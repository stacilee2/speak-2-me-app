import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditToDoForm() {
    const { task, taskId } = useParams();
    const [formData, setFormData] = useState({ assignment: task });
    const [errorsList, setErrorsList] = useState([]);
    const navigate = useNavigate();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`/speechtasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((updatedTask) => {
                        console.log(updatedTask);
                        navigate(`/myspeechtasks`); 
                    });
                } else {
                    r.json().then(r => {
                        setErrorsList(r.errors)
                        setTimeout(() => {
                            setErrorsList([])
                        }, 5000);
                    });
                }; 
            });
        };

    return (
        <div>
            <h4 className='edit-form'>Edit To-Do Form</h4>
            <p>
                Change the selected task of "<strong>{task}</strong>" here.
            </p>
            <ul className="error-card">{errorsList.map((error, index) => 
                <ul key={index}>{error}</ul>
                )}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="assignment"
                    value={formData.assignment}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditToDoForm;
