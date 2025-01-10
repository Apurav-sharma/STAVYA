import React from 'react'

export default function Eventform() {
    return (
        <>
            <div class="form-container">
                <h1>Event Registration</h1>
                <form>
                    <div class="form-group">
                        <label for="name">Name of Student</label>
                        <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                    </div>

                    <div class="form-group">
                        <label for="roll">Roll Number</label>
                        <input type="text" id="roll" name="roll" placeholder="Enter your roll number" required />
                    </div>

                    <div class="form-group">
                        <label for="batch">Batch</label>
                        <input type="text" id="batch" name="batch" placeholder="Enter your batch" required />
                    </div>

                    <div class="form-group">
                        <label for="id">Institute ID</label>
                        <input type="text" id="id" name="id" placeholder="Enter your institute ID" required />
                    </div>

                    <div class="form-group">
                        <label for="contact">Contact Number</label>
                        <input type="tel" id="contact" name="contact" placeholder="Enter your contact number" required />
                    </div>

                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}
