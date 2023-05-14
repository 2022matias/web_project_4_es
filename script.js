const openPopup = document.querySelector('.profile__edit-button');
const openPopup2 = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popup2 = document.querySelector('.popup2');
const popupContainer = document.querySelector('.popup__container');
const popupContainer2 = document.querySelector('.popup__container_card');
const closePopup = popupContainer.querySelector('.popup__close-icon');
const closePopup2 = document.querySelector('.popup__close-icon-card');
const popupName = document.querySelector('.popup__name');
const popupSkill = document.querySelector('.popup__skill');
const profileName = document.querySelector('.profile__jacques');
const profileSkill = document.querySelector('.profile__explorer');

const cardElements = document.querySelector(".elements");

function openForm() {
  popup.classList.remove('popup-visible');
}

function closeForm() {
  popup.classList.add('popup-visible');
}

function openForm2() {
  popup2.classList.remove('popup-visible');
}

function closeForm2() {
  popup2.classList.add('popup-visible');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileSkill.textContent = popupSkill.value;
  closeForm();
}

function handleFormSubmit2 (evt) {
  evt.preventDefault();
  createNewCard();
  closeForm2();
}

function createNewCard () {
  const popupPlace = document.querySelector('.popup__place');
  const popupUrl = document.querySelector('.popup__url');
  createCard(popupPlace.value, popupUrl.value);
}

openPopup.addEventListener('click', openForm);
openPopup2.addEventListener('click', openForm2);
closePopup.addEventListener('click', closeForm);
closePopup2.addEventListener('click', closeForm2);
popupContainer.addEventListener('submit', handleFormSubmit);
popupContainer2.addEventListener('submit', handleFormSubmit2);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

initialCards.forEach(function(element) {
  createCard(element.name, element.link);
});


function createCard(titleValue,linkValue) {
  const cardTemplate = document.querySelector("#elements").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__image").src = linkValue;
  cardElement.querySelector(".element__name").textContent = titleValue;
  
  const elementTrash = cardElement.querySelector('.element__trash');
  elementTrash.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });

  const elementHeart = cardElement.querySelector('.element__heart');
  elementHeart.addEventListener('click', (event) => {
    event.target.classList.toggle("element__heart-black");
  });
  
  const bigImage = document.querySelector(".enlarge-image__image");
  const enlargeTitle = document.querySelector(".enlarge-image__title");
  const enlargeImage = document.querySelector(".enlarge-image");
  cardElement.querySelector(".element__image").addEventListener("click", function () {
    enlargeTitle.textContent = titleValue;
    bigImage.src = linkValue;
    enlargeImage.classList.remove("no-vision");
  });
  document.querySelector(".enlarge-image__close-image").addEventListener("click", function () {
    enlargeImage.classList.add("no-vision");
  });

  cardElements.prepend(cardElement);
  return cardElement;
}


  