export default function Leaderboard() {
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
        <h3 className="text-center">Leaderboard</h3>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {array.map((x) => (
                <li className="list-group-item" id={x.key}>
                  Player: {x.user} | Rank: {x.rank}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  