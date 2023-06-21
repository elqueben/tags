export default function Card() {

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
            <h3>You're Ranked {array[0].rank}</h3>

        </div>
    )
}