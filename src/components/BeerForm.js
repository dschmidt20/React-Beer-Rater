import React from 'react'

function BeerForm() {
    return (
        <>
        <h1>
            Add New Beer!
        </h1>
        <form >
            <label>
               Beer Name:
                <input type='text' />
            </label>
            <br/>
            <label>
               Brewery Name:
                <input type='text' />
            </label>
            <br/>
            <label>
               Beer Type:
                <select >
                <option value='blank'>-Select One-</option>
                <option value='stout'>Stout</option>
                <option value='ipa'>IPA</option>
                <option value='gose'>Gose</option>
                <option value='sour'>Sour/Wild Ale</option>
                <option value='Pilsner'>Pilsner</option>
                <option value='hefeweizen'>Hefeweizen</option>
                <option value='porter'>Porter</option>
                <option value='seasonal'>Seasonal</option>
                <option value='witbier'>Witbier</option>                
                <option value='berliner'>Berliner</option>
                <option value='wheat'>Wheat</option>
                </select> 
            </label>
            <br/>
            <label>
                Image:
                <input type='text' />
            </label>
            <br/>
            <label>
                ABV:
                <input type='text' />
            </label>
            <br/>
            <label>
                Region:
                <input type='text' />
            </label>
            <br/>
            <label>
                Tasting Notes:
                <input type='text' />
            </label>
            <br/>
            <label>
                Favorite? <input type='checkbox' />
            </label>
        </form>
        </>
    )
}

export default BeerForm
