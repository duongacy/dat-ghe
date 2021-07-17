const stateInitial = {
    danhSachGhe: [
        {
            soGhe: 1,
            tenGhe: 'Số 1 ',
            gia: 100,
            trangThai: true,
            isBooking: false,
        },
        {
            soGhe: 2,
            tenGhe: 'Số 2 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 3,
            tenGhe: 'Số 3 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 4,
            tenGhe: 'Số 4 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 5,
            tenGhe: 'Số 5 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 6,
            tenGhe: 'Số 6 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 7,
            tenGhe: 'Số 7 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 8,
            tenGhe: 'Số 7 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 9,
            tenGhe: 'Số 9 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 10,
            tenGhe: 'Số 10 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 11,
            tenGhe: 'Số 11 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 12,
            tenGhe: 'Số 12 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 13,
            tenGhe: 'Số 13 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 14,
            tenGhe: 'Số 14 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 15,
            tenGhe: 'Số 15 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 16,
            tenGhe: 'Số 16 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 17,
            tenGhe: 'Số 17 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 18,
            tenGhe: 'Số 18 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 19,
            tenGhe: 'Số 19 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 20,
            tenGhe: 'Số 20 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 21,
            tenGhe: 'Số 21 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 22,
            tenGhe: 'Số 22 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 23,
            tenGhe: 'Số 23 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 24,
            tenGhe: 'Số 24 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 25,
            tenGhe: 'Số 25 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 26,
            tenGhe: 'Số 26 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 27,
            tenGhe: 'Số 27 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 28,
            tenGhe: 'Số 28 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 29,
            tenGhe: 'Số 29 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 30,
            tenGhe: 'Số 30 ',
            gia: 100,
            trangThai: true,
            isBooking: false,
        },
        {
            soGhe: 31,
            tenGhe: 'Số 31 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 32,
            tenGhe: 'Số 32 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 33,
            tenGhe: 'Số 33 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 34,
            tenGhe: 'Số 34 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
        {
            soGhe: 35,
            tenGhe: 'Số 35 ',
            gia: 100,
            trangThai: false,
            isBooking: false,
        },
    ],
    danhSachGheDangDat: [],
};

export const datVeReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case 'CHON_GHE':
            // Thay đổi trạng thái cho danhSachGhe
            let gheThayDoi = state.danhSachGhe.find(
                (item) => item.soGhe === action.payload
            );
            gheThayDoi.isBooking = !gheThayDoi.isBooking;
            state.danhSachGhe = [...state.danhSachGhe];
            // ===============

            // Thay đổi giá trị cho danhSachGheDangDat
            if (
                state.danhSachGheDangDat.some(
                    (item) => item.soGhe === action.payload
                )
            ) {
                state.danhSachGheDangDat = state.danhSachGheDangDat.filter(
                    (item) => item.soGhe !== action.payload
                );
                state.danhSachGheDangDat = [...state.danhSachGheDangDat];
            } else {
                state.danhSachGheDangDat = [
                    ...state.danhSachGheDangDat,
                    gheThayDoi,
                ];
            }
            break;
        default:
            break;
    }

    return {...state};
};
