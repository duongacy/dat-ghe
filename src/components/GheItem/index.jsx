import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function GheItem(props) {
    // SoGhe :10 ,TenGhe : "số 10 " , Gia :100 , TrangThai :false
    const dispatch = useDispatch();
    const {soGhe, tenGhe, gia, trangThai, isBooking} = props.item;
    const handleSelectGhe=()=>{
        const action = {
            type :"CHON_GHE",
            payload: soGhe
        }
        dispatch(action);
    }
    return (
        <div className='col-2 p-1'>
            <button
                disabled={trangThai}
                className={`btn btn-primary ${trangThai && 'btn-danger'} ${
                    isBooking && 'btn-success'
                }  rounded-0`}
                style={{minWidth: '100px'}}
                onClick={handleSelectGhe}
                >
                {soGhe}
            </button>
        </div>
    );
}
