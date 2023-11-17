import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditToDoForm() {
    const { task, taskId } = useParams();
    const [taskToEdit, setTaskToEdit] = useState(task);
    const [formData, setFormData] = useState({ assignment: task });
    const [errorsList, setErrorsList] = useState([]);
    const [isTaskUpdated, setIsTaskUpdated] = useState(false);
    const [isCancelClicked, setIsCancelClicked] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                    setTaskToEdit(updatedTask.assignment);
                    setIsTaskUpdated(true)
                    setTimeout(() => {
                        setIsTaskUpdated(false)
                    }, 3000);
                })
            } else {
                r.json().then(r => {
                    setErrorsList(r.errors)
                    setTimeout(() => {
                        setErrorsList([])
                    }, 5000);
                })
            }
        })
    };

    function handleCancel() {
        setFormData({ assignment: task });
        setIsCancelClicked(true);
        setTimeout(() => {
            setIsCancelClicked(false);
        }, 3000);
    };

    return (
        <div>
            <h2 className='edit-form'>Edit Task</h2>
            <hr />
            {isTaskUpdated && <div style={{ color: 'green' }}>Task updated successfully!</div>}
            {isCancelClicked && <div style={{ color: 'red' }}>Task edit canceled.</div>}
            <p>
                <strong>{taskToEdit}</strong>
                <br />
            </p>
            <ul className="error-card">
                {errorsList.map((error, index) => (
                    <ul key={index}>{error}</ul>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    style={{ width: "350px", textAlign: "center" }}
                    type="text"
                    name="assignment"
                    value={formData.assignment}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button className="complete-button">Confirm EDIT <span>&#10003;</span></button>
                <button className="cancel-button" onClick={handleCancel}>
                    Cancel EDIT
                </button>
            </form>
        </div>
    );
};

export default EditToDoForm;

