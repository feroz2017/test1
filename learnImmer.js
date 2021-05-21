const {produce} = require('immer')

const baseState = [
    {
        todo: "Learn typescript",
        done: true
    },
    {
        todo: "Try immer",
        done: {
            name: "Huura"
        }
    }
]
// console.log(baseState)
// console.log(produce)
const nextState = produce(baseState, draftState => {
    console.log('Before update: ',draftState)
    draftState
    draftState.push({todo: "Tweet about it"})
    draftState[1].done.name = ":::"
    // draftState[1].done = true
    console.log("######################################################33")
    // console.log(baseState)
    console.log('After update: ',draftState)
})
console.log("Next state: ", nextState)