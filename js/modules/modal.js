export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this for callback to refer object class
    this.eventTooggleModal = this.eventTooggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // opens or closes modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // add toggle event to modal
  eventTooggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // closes modal when recognise outside click
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  // add events to the elements modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventTooggleModal);
    this.botaoFechar.addEventListener('click', this.eventTooggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
