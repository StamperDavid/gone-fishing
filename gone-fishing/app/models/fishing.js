export default class Fishing {
    constructor(data) {
        // this.completed = data.completed
        this.id = data._id
        this.species = data.species
        this.length = data.length
        this.price = data.price
        this.weight = data.weight
        this.imageUrl = data.imageUrl
        this.description = data.description || `Not Much To Tell Really! Easy Catch`

    }

    get Template() {
        if (this.completed) {
            return `
            <li class="done">${this.description}</li>
           <button class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this.id}')">Delete</button>
           <button class="btn btn-primary" onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')">completed</button>
           
        `
        } else {
            return `
            <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.species} - ${this.length} - ${this.weight}</h5>
                    <h5 class="card-title">$${this.price.toFixed(2)}</h5>
                    <p class="card-text">${this.description}</p>
                    <button class="btn btn-primary" onclick="app.controllers.carController.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.carController.delete('${this._id}')">Delete</button>
                </div>
            </div>
        </div>
        `
        }
    }
}