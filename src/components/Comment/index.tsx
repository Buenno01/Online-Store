import Rating from './Rating';

type CommentProps = {
  rating: string,
  email: string,
  text: string,
};

function Comment({ text, email, rating }: CommentProps) {
  return (
    <div>
      <h3 data-testid="review-card-email" className="font-semibold">{ email }</h3>
      <Rating id={ email } rate={ rating } />
      <p data-testid="review-card-evaluation">{ text }</p>
      <hr />
    </div>
  );
}

export default Comment;
