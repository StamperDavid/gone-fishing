import FishingService from "../FishingService.js";

const _fishingService = new FishingService()

function _drawFishings() {
    var fishing = _fishingService.Fishing
    var template = ''
    fishing.forEach(fishing => {
        template += fishing.template
    })
}
document.getElementById('fishing').innerHTML = template
    // private

function _drawForm() {
    document.getElementById('form-content').innerHTML = `<form class="row" onsubmit="app.controllers.carController.addCar(event)">
    
    <div class="form-group col-3">
        <label for="species">Species</label>
        <input type="text" class="form-control" id="species" name="species" placeholder="Enter Species" required>
    </div>
    
    <div class="form-group col-3">
        <label for="length">Length</label>
        <input type="number" class="form-control" id="length" name="length" placeholder="Enter Length"
            required>
    </div>
    
    <div class="form-group col-3">
        <label for="weight">Weight</label>
        <input type="number" class="form-control" id="weight" name="wight" placeholder="Enter Weight"
            required>
    </div>
    
    <div class="form-group col-3">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" name="price" placeholder="Enter Price"
            required>
    </div>
    
    <div class="form-group col-3">
        <label for="imgUrl">Image</label>
        <input type="url" class="form-control" id="imgUrl" name="imgUrl" placeholder="Enter Image Url">
    </div>
    <div class="form-group col-3">
        <label for="fishtale">fishtale</label>
        <input type="text" class="form-control" id="fishtale" name="fishtale" placeholder="Fish Tale"
            required>
    </div>
    <button type="submit" class="btn btn-primary">Post For Sale</button>
</form>`
}

// public
export default class FishingController {

    constructor() {
        fishingService.addSubsciber("", _drawFishings)
        fishingService.getFishings()

    }

    addFishing(event) {
        event.preventDefault()
        var form = event.target
        let carData = {
            species: form.species.value,
            length: form.length.value,
            weight: form.weight.value,
            price: form.price.value,
            description: form.description.value,
            imgUrl: form.imgUrl.value,
        }
        _fishingService.addFishing(fishing)
    }
    toggleFishingStatus(fishingId) {
        _fishingService.toggleFishingStatus(fishingId)
    }
    removeFishing(fishingId) {
        _fishingService.removeFishing(fishingId)
    }

}