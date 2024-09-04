import '../styles/index.css';
import InputComponent from './InputComponent';

export default function PersonalInfoForm({isVisible}) {
  return isVisible ? (
    <form hidden={isVisible} >
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
        type={'text'}
        name={'linkedin'}
        placeholder={'linkedin.com/in/rafaelvecchisilva'}
        labelText={'LinkedIn profile'}
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
  ) : null;
}
