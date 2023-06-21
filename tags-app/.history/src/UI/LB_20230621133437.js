export default function Leaderboard() {

    const array = [
        {
            user : "kevin",
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
                <li id={key}>{x.user} </li>)}
            </ul>
        </div>
    )
}