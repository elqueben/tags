export default function Leaderboard() {

    const export array = [
        {
            user : "kevin 1",
            rank : 3,
            key : 1
        },
        {
            user : "kevin 2",
            rank : 5,
            key : 2
        }
    ]

    return (
        <div>
            <h3>Leaderboard</h3>
            <ul>
            {array.map(x =>
                <li id={x.key}>Player: {x.user} | Rank: {x.rank}</li>)}
            </ul>
        </div>
    )
}