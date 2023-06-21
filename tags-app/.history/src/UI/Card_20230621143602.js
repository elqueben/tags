export default function Card() {
    const array = [
      {
        user: "kevin 1",
        rank: 3,
        key: 1,
      },
      {
        user: "kevin 2",
        rank: 5,
        key: 2,
      },
    ];
  
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">
              You're Ranked {array[0].rank}# in your league
            </h3>
          </div>
        </div>
      </div>
    );
  }
  