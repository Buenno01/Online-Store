import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';
import RatingInput from './RatingInput';
import { CommentFormType } from '../../@types/CommentFormType';

type NewCommentFormProps = {
  setComments:Dispatch<SetStateAction<CommentFormType[]>>,
  comments: CommentFormType[],
};

const initialForm: CommentFormType = {
  text: '',
  email: '',
  rating: '',
};

function NewCommentForm({ setComments, comments }:NewCommentFormProps) {
  const [formFields, setFormFields] = useState<CommentFormType>(initialForm);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(formFields.email);

  const validation = (
    formFields.rating !== ''
    && formFields.email !== ''
  );

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement>) => {
    const copy = formFields;
    setFormFields({ ...copy, [target.name]: target.value });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validation && emailRegex) {
      setErrorMessage(false);
      setComments([...comments, formFields]);
      setFormFields(initialForm);
    } else {
      setErrorMessage(true);
    }
  };

  const handleClick = () => {
  };
  return (
    <form
      className="flex flex-col w-64"
      onSubmit={ (e) => { handleSubmit(e); } }
    >
      <label className="flex flex-col">
        E-mail:
        <input
          className="border border-gray-400"
          data-testid="product-detail-email"
          onChange={ (e) => { handleChange(e); } }
          type="text"
          name="email"
          value={ formFields.email }
        />
      </label>
      <RatingInput
        formFields={ formFields }
        setFormFields={ setFormFields }
      />
      <label className="flex flex-col">
        Descrição:
        <textarea
          className="border border-gray-400"
          data-testid="product-detail-evaluation"
          onChange={ (e) => { handleChange(e); } }
          name="text"
          value={ formFields.text }
        />
      </label>
      <button
        onClick={ handleClick }
        type="submit"
        data-testid="submit-review-btn"
      >
        Avaliar
      </button>
      {
        errorMessage
          && <p data-testid="error-msg">Campos inválidos</p>
      }
    </form>
  );
}

export default NewCommentForm;
