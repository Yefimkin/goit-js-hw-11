import './css/styles.css';
import renderImage from './js/renderImg';
import FetchBildsAPI from './js/service-api';

import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.search-form'),
  submitBtn: document.querySelector('button[type=submit]'),
  gallery: document.querySelector('.gallery'),
}

refs.form.addEventListener('submit', onSubmitBtn);

const loadbildsApi = new FetchBildsAPI();

let modalGallery = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

