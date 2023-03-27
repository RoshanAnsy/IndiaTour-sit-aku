import Card from './Card';

const Cards = ({onSet,removeTour }) => {
  return (
    <div className='cointainer'>
      <div className="title">
        <h2>India Tour</h2>
      </div>
      <div className='cards'>
        {onSet.map((tour) => {
          return <Card key={tour.id} {...tour}  removeTour={removeTour} ></Card>;
        })}
      </div>
    </div>
  );
};

export default Cards;
