import React from 'react'

export default function Beranda(props) {

    const {bookList} = props;

    return (
        <div>
            <div className="text-center">Selamat datang di toko buku camp404</div>
            <div id="katalogBuku" className="mt-5">
                <h2>Katalog Buku</h2>
                <hr />

                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Pengarang</th>
                            <th>Harga</th>
                            <th>Stock</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookList.map((book,index)=> (
                        <tr key={book._id}>
                            <td> {index + 1 } </td>
                            <td> {book.judul} </td>
                            <td> {book.pengarang} </td>
                            <td> {book.harga} </td>
                            <td> {book.stok} </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
