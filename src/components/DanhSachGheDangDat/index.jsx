import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function DanhSachGheDangDat() {
    const {danhSachGheDangDat} = useSelector((root) => root.datVeReducer);
    const dispatch = useDispatch();
    const handleDelete = (soGhe) => {
        const action = {
            //dùng chung action này luôn vì lên reducer nó cũng check là ghế này tồn tại chưa,
            // trường hợp này sẽ rơi vào trường hợp đã tồn tại nên nó sẽ xóa
            type: 'CHON_GHE',
            payload: soGhe,
        };
        dispatch(action);
    };
    return (
        <ContainerWrapper>
            {danhSachGheDangDat.length === 0 && ( //kiểm tra có trống ghế hay không, làm thêm
                <tr>
                    <td colSpan='2'>
                        <h4 className='text-warning py-2'>
                            Vui lòng chọn ghế
                        </h4>
                    </td>
                </tr>
            )}
            {danhSachGheDangDat.map((item, key) => (
                <tr key={key}>
                    <td>{item.soGhe}</td>
                    <td>
                        <button
                            className='btn btn-danger rounded-0'
                            onClick={() => handleDelete(item.soGhe)}>
                            Xóa
                        </button>
                    </td>
                </tr>
            ))}
        </ContainerWrapper>
    );
}

const ContainerWrapper = (props) => {
    return (
        // mấy cái style rườm rà kiểu này nên để riêng cho đỡ rối
        <div className='col-lg-4 border'>
            <h3 className='text-uppercase'>danh sach ghe da dat</h3>
            <div className='py-5'>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Số ghế</th>
                            <th scope='col'>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                        {/* children là để nhét mấy thằng con vô á */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
