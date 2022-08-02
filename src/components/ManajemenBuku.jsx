import { React, useState } from 'react';

export default function ManajemenBuku(props) {
  const { bookList, store, update, remove } = props;
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();

  function showCreate() {
    setForm('create');
  }

  function showEdit(book) {
    setInputBook(book);
    setForm('edit');
  }
  function deleteBook(book) {
    remove(book);
  }

  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStok(event) {
    setInputBook({ ...inputBook, stok: event.target.value });
  }

  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
    setForm('');
  }

  function submitChange(event) {
    event.preventDefault();
    update(inputBook);
    setForm('');
  }

  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Manajemen buku</h1>
      <div id='daftarBuku'>
        <h2 className='mt-3'>Daftar Buku</h2>
        <hr />
        <button className='btn btn-primary m-2' onClick={showCreate}>
          Tambah Buku
        </button>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stoks</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {book.judul} </td>
                <td> {book.pengarang} </td>
                <td> {book.harga}</td>
                <td> {book.stok}</td>
                <td>
                  <button
                    className='btn btn-info mx-1'
                    onClick={() => showEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteBook(book)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {form === 'create' && (
        <div id='formTambah'>
          <h5>Tambah Buku</h5>
          <hr />
          <form action='' className='form-row' onSubmit={submitAdd}>
            <div className='col-3'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label ' htmlFor='name'>
                  Judul
                </label>
                <input
                  type='text'
                  name='judul'
                  id='name'
                  className='form-control mt-2'
                  onChange={handleJudul}
                />
              </div>
            </div>
            <div className='col-3'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='pengarang'>
                  Pengarang
                </label>
                <input
                  type='text'
                  name='pengarang'
                  id='pengarang'
                  className='form-control mt-2'
                  onChange={handlePengarang}
                />
              </div>
            </div>
            <div className='col-2'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='harga'>
                  harga
                </label>
                <input
                  type='text'
                  name='harga'
                  id='harga'
                  className='form-control mt-2'
                  onChange={handleHarga}
                />
              </div>
            </div>
            <div className='col-2'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='stok'>
                  stok
                </label>
                <input
                  type='number'
                  name='stok'
                  id='stok'
                  className='form-control mt-2'
                  onChange={handleStok}
                />
              </div>
            </div>
            <div className='col-2'>
              <input type='submit' id='' className='btn btn-primary ml-5' />
            </div>
          </form>
        </div>
      )}
      {form === 'edit' && (
        <div id='formUbah'>
          <h5>Ubah Buku</h5>
          <hr />
          <form action='' className='form-row' onSubmit={submitChange}>
            <div className='col-3'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label ' htmlFor='name'>
                  Judul
                </label>
                <input
                  type='text'
                  name='judul'
                  id='name'
                  className='form-control mt-2'
                  onChange={handleJudul}
                  value={inputBook.judul}
                />
              </div>
            </div>
            <div className='col-3'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='pengarang'>
                  Pengarang
                </label>
                <input
                  type='text'
                  name='pengarang'
                  id='pengarang'
                  className='form-control mt-2'
                  onChange={handlePengarang}
                  value={inputBook.pengarang}
                />
              </div>
            </div>
            <div className='col-2'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='harga'>
                  harga
                </label>
                <input
                  type='text'
                  name='harga'
                  id='harga'
                  className='form-control mt-2'
                  onChange={handleHarga}
                  value={inputBook.harga}
                />
              </div>
            </div>
            <div className='col-2'>
              <div className='mb-3 mx-2'>
                <label classNmae='form-label' htmlFor='stok'>
                  stok
                </label>
                <input
                  type='number'
                  name='stok'
                  id='stok'
                  className='form-control mt-2'
                  onChange={handleStok}
                  value={inputBook.stok}
                />
              </div>
            </div>
            <div className='col-2'>
              <input type='submit' id='' className='btn btn-primary ml-5' />
            </div>
          </form>
        </div>
      )}
      <div id='daftarBuku'></div>
    </div>
  );
}
