import Star from '../Atoms/Star';

type RatingProps = {
  rate: string,
  id: string,
};

function Rating({ id, rate }: RatingProps) {
  const grades = ['1', '2', '3', '4', '5'];
  return (
    <div className="flex gap-1" data-testid="review-card-rating">
      {
        grades.map((value, index) => (
          <Star
            name={ id }
            rate={ rate }
            value={ value }
            checked={ rate === value }
            key={ id + index }
          />
        ))
      }
    </div>
  );
}

export default Rating;
