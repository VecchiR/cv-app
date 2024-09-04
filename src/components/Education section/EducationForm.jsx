import '../../styles/index.css';
import FormButtons from '../FormButtons';
import InputComponent from '../InputComponent';

export default function EducationForm({ isVisible }) {
  return isVisible ? (
    <form>
      <InputComponent
        type={'text'}
        name={'institution'}
        placeholder={"Enter the institution's name"}
        labelText={'Institution'}
      />
      <InputComponent
        type={'text'}
        name={'degree'}
        placeholder={'Enter degree, certification, field of study'}
        labelText={'Degree'}
      />

      <div className="date-fields-group">
        <InputComponent
          type={'text'}
          name={'start-date'}
          placeholder={'Enter start date'}
          labelText={'Start date'}
        />
        <InputComponent
          type={'text'}
          name={'end-date'}
          placeholder={'Enter end date'}
          labelText={'End date'}
        />
      </div>

      <InputComponent
        type={'text'}
        name={'location'}
        placeholder={'City, Country'}
        labelText={'Location'}
      />

      <FormButtons />

    </form>
  ) : null;
}
