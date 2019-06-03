import Fishing from "../../models/fishing.js";
// private
let fishingApi = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api/David/fish",
})

let _state = {
    fishing: [],
}

let subscribers = {
    fishing: [],
}

function _setState(prop, data) {
    _subscribers[prop].forEach(fn => fn())
}

// public
export default class FishingService {
    //shouldn't there be a place in here for my form?? plus it will not let me commit

    addSubscriber(prop, fn) {
        _subscribers[prop].push(fn) //not sure if it should be [propName] or not
    }

    get Fishing() {
        return _state.fishing
    }

    getAllFishings() {
        console.log("Getting my Fishings list")
        fishingApi.get()
            .then(res => {
                console.log(res)
                let data = res.data.data.map(t => new Fishing(f))
                _setState('fishing', data)
            })
    }
    addFishing(fishing) {
        fishingApi.post("Getting all the fishings", fishing)
            .then(res => {
                console.log(res)
                this.getFishing()
            })
    }
    toggleFishingStatus(fishingId) {
        let fishing = _state.fishing.find(fishing => fishing.id == fishingId)
        fishing.completed = !fishing.completed
        fishingApi.put(fishingId, fishing)
            .then(res => {
                this.getFishing()
            })
    }

    removeFishing(fishingId) {
        console.log(fishingId)
        fishingApi.delete(fishingId)
            .then(res => {
                this.getFishings()
            })
    }

}


// I imagine this was intended to confuse me terribly, but it is not needed here

//    // @ts-ignore
//    const weatherApi = axios.create({
//      baseURL: "//bcw-sandbox.herokuapp.com/api/David/fish",
//      timeout: 3000
//  });

// why is this constructor in the service file, is this to try and get me to fail?
// constructor() {

// }