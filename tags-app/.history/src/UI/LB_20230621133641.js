export default function Leaderboard() {

    const array = [
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
            <ul>
            {array.map(x =>
                <li id={x.key}>player: {x.user} | Score: {x.rank}</li>)}
            </ul>
        </div>
    )
}