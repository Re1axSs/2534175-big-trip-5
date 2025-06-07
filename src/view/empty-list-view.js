import AbstractView from '../framework/view/abstract-view.js';

const NoPointTextType = {
  everything: 'Click New Event to create your first point',
  past: 'There are no past events now',
  present: 'There are no present events now',
  future: 'There are no future events now',
};

function createEmptyListTemplate(filterType) {
  return `<p class="trip-events__msg">${NoPointTextType[filterType]}</p>`;
}

export default class EmptyListView extends AbstractView {
  #filterType;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyListTemplate(this.#filterType);
  }
}
