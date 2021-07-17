import React from 'react';
import {useSelector} from 'react-redux';
import GheItem from '../GheItem';

export default function DanhSachGhe() {
    const {danhSachGhe} = useSelector((root) => root.datVeReducer);
    return (
        <div className='col-lg-8 border'>
            <h3 className='text-uppercase'>danh sach ghe</h3>
            <div className='row py-5'>
                {danhSachGhe.map((item, key) => (
                    <GheItem item={item} key={key} />
                ))}
            </div>
        </div>
    );
}
