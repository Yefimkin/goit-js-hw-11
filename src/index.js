import './css/styles.css';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  submitBtn: document.querySelector('button[type=submit]'),
  gallery: document.querySelector('.gallery'),
}

// HTTP-запросы

