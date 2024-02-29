import drinksList from "../../utils/drinksList"

const drink1 = drinksList[0];
const drink2 = drinksList[1];
const drink3 = drinksList[2];
const drink4 = drinksList[3];
const drink5 = drinksList[4];

<div class="wrapper">
        <div class="container">
            <input type="radio" name="slide" id="c1" checked>
            <label for="c1" class="card">
                <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                        <h4>{drink1.name}</h4>
                        <p>{drink1.tags}</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" >
            <label for="c2" class="card">
                <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                        <h4>{drink2.name}</h4>
                        <p>{drink2.tags}</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" >
            <label for="c3" class="card">
                <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                        <h4>{drink3.name}</h4>
                        <p>{drink3.tags}</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" >
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>{drink4.name}</h4>
                        <p>{drink4.tags}</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c5" >
            <label for="c5" class="card">
                <div class="row">
                    <div class="icon">5</div>
                    <div class="description">
                        <h4>{drink5.name}</h4>
                        <p>{drink5.tags}</p>
                    </div>
                </div>
            </label>
        </div>
    </div>