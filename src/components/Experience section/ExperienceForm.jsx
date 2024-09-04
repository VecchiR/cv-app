import '../../styles/index.css';
import FormButtons from '../FormButtons';
import InputComponent from '../InputComponent';

export default function ExperienceForm({ isVisible }) {
  return isVisible ? (
    <form>
      <InputComponent
        type={'text'}
        name={'company'}
        placeholder={"Enter the companie's name"}
        labelText={'Company name'}
      />
      <InputComponent
        type={'text'}
        name={'title'}
        placeholder={'Enter position title'}
        labelText={'Position Title'}
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

      <InputComponent
        type={'textarea'}
        name={'description'}
        placeholder={'Enter description'}
        labelText={'Description'}
      />

      <FormButtons />

    </form>
  ) : null;
}
