import React from 'react';
import DanhSachGhe from '../DanhSachGhe';
import DanhSachGheDangDat from '../DanhSachGheDangDat';
export default function Home() {
    return (
        <div className='container py-5'>
            <div className='row'>
                <DanhSachGhe />
                <DanhSachGheDangDat />
            </div>
        </div>
    );
}
