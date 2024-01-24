import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { CommentFormType } from '../../@types/CommentFormType';
import Star from '../Atoms/Star';

type RatingInputProps = {
  formFields: CommentFormType
  setFormFields:Dispatch<SetStateAction<CommentFormType>>
};

function RatingInput({ formFields, setFormFields }: RatingInputProps) {
  const [rating, setRating] = useState(formFields.rating);
  const grades: string[] = ['1', '2', '3', '4', '5'];
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const copy = formFields;
    copy.rating = target.value;
    setFormFields({ ...formFields, rating: target.value });
    setRating(target.value);
  };

  return (
    <div className="flex gap-1 text-xl">
      {
        grades.map((grade) => {
          const isChecked = grade === rating;
          return (
            <Star
              testid={ `${grade}-rating` }
              handleChange={ handleChange }
              key={ `starInput${grade}` }
              name="rating"
              rate={ rating }
              value={ grade }
              checked={ isChecked }
            />
          );
        })
      }
    </div>
  );
}

export default RatingInput;
