import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Location = () => {
    const { dispatch } = useContext(AppContext);
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        })
    }

    return (


        <div class="alert alert-success" style={{ backgroundColor: 'lightgreen' }}> Currency {
            <select name="Location" id="Location" style={{ backgroundColor: 'lightgreen'}}onChange={event => changeLocation(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        }
        </div>
    );
};
export default Location;