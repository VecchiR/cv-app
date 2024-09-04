import '../styles/index.css';

export default function PersonalInfoForm() {
  return (
    <form>
        <h1>Personal Information</h1>

        <label htmlFor="name"><span className="label-text">Full name</span></label>
        <input type="text" name="fullname" id="fullname" placeholder='Enter first and last name' />

        <label htmlFor="email"><span className="label-text">E-mail</span></label>
        <input type="email" name="email" id="email" placeholder='Enter your e-mail address' />

        <label htmlFor="email"><span className="label-text">Phone number</span></label>
        <input type="tel" name="tel" id="tel" placeholder='Enter you phone number' />

        <label htmlFor="location"><span className="label-text">Location</span></label>
        <input type="text" name="location" id="location" placeholder='City, Country' />
    </form>
  );
}
