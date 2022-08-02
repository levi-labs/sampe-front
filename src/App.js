import { useState, useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';
import axios, { Axios } from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  function retrieveData() {
    axios
      .get('http://localhost:4000/book')
      .then((res) => {
        setBooks(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function storeData(inputBooks) {
    // console.log(inputBuku);

    axios
      .post('http://localhost:4000/book/add', inputBooks)
      .then((res) => {
        setBooks((preBooks) => [...preBooks, inputBooks]);
        retrieveData();
        alert('data berhasil di tambah');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function updateData(inputBooks) {
    // console.log(inputBook)
    axios
      .put('http://localhost:4000/book/update/' + inputBooks._id, inputBooks)
      .then((res) => {
        retrieveData();
        alert('data berhasil di ubah');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function deleteBook(book) {
    // console.log(book)
    axios
      .delete('http://localhost:4000/book/delete/' + book._id)
      .then(() => {
        retrieveData();
        alert('Data berhasil di hapus');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path='/' exact>
            <Beranda bookList={books} />
          </Route>

          <Route path='/manajemen-buku'>
            <ManajemenBuku
              bookList={books}
              store={storeData}
              update={updateData}
              remove={deleteBook}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
