const personal = [
  { type: 'text', name: 'fullname', placeholder: 'Enter first and last name', labelText: 'Full name' },
  { type: 'email', placeholder: 'Enter your e-mail address', labelText: 'E-mail' },
  { type: 'text', name: 'linkedin', placeholder: 'linkedin.com/in/rafaelvecchisilva', labelText: 'LinkedIn profile' },
  { type: 'tel', placeholder: 'Enter your phone number', labelText: 'Phone number' },
  { type: 'text', name: 'location', placeholder: 'City, Country', labelText: 'Location' }
];
const education = [
  { type: 'text', name: 'institution', placeholder: "Enter the institution's name", labelText: 'Institution' },
  { type: 'text', name: 'degree', placeholder: 'Enter degree, certification, field of study', labelText: 'Degree' },
  { type: 'text', name: 'start-date', placeholder: 'Enter start date', labelText: 'Start date' },
  { type: 'text', name: 'end-date', placeholder: 'Enter end date', labelText: 'End date' },
  { type: 'text', name: 'location', placeholder: 'City, Country', labelText: 'Location' }
];

const experience = [
  { type: 'text', name: 'company', placeholder: "Enter the company's name", labelText: 'Company name' },
  { type: 'text', name: 'title', placeholder: 'Enter position title', labelText: 'Position Title' },
  { type: 'text', name: 'start-date', placeholder: 'Enter start date', labelText: 'Start date' },
  { type: 'text', name: 'end-date', placeholder: 'Enter end date', labelText: 'End date' },
  { type: 'text', name: 'location', placeholder: 'City, Country', labelText: 'Location' },
  { type: 'textarea', name: 'description', placeholder: 'Enter description', labelText: 'Description' }
];

const formFields = {
  personal : personal,
  education : education,
  experience : experience
} 

export default formFields;