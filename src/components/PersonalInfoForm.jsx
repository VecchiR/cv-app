import '../styles/index.css';
import InputComponent from './InputComponent';

export default function PersonalInfoForm() {
  return (
    <form>
      <h1>Personal Information</h1>
      <InputComponent
        type={'text'}
        name={'fullname'}
        placeholder={'Enter first and last name'}
        labelText={'Full name'}
      />
      <InputComponent
        type={'email'}
        placeholder={'Enter your e-mail address'}
        labelText={'E-mail'}
      />

      <InputComponent
        type={'tel'}
        placeholder={'Enter your phone number'}
        labelText={'Phone number'}
      />

      <InputComponent
        type={'text'}
        name={'location'}
        placeholder={'City, Country'}
        labelText={'Location'}
      />
    </form>
  );
}
