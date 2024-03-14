const Form = () => {
    return (
        <form>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                />
            </div>
            <div>
                <label htmlFor='companyName'>Company Name:</label>
                <input
                    type='text'
                    name='companyName'
                    placeholder='Company Name'
                />
            </div>
            <div>
                <label htmlFor='email'>Email Address:</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                />
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                    name='message'
                    placeholder='Message'
                />
            </div>
            <button type='submit'>Send Message</button>
        </form>
    )
}

export default Form;