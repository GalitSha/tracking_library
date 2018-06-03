class Tracker {
  constructor(numOfEvents) {
    this.allEvents = [];
    this.numOfEvents = numOfEvents;
    document.addEventListener('DOMContentLoaded', this.trackEvent.bind(this));
  }

  logEvents() {
    console.log(this.allEvents);
  }

  clearEvents() {
    this.allEvents = [];
  }

  createEvent(eventData) {
    let newEvent = {};
    newEvent.type = eventData.type;
    newEvent.pageX = eventData.pageX;
    newEvent.pageY = eventData.pageY;
    newEvent.target = eventData.target;

    return newEvent;
  }

  trackEvent() {
    document.addEventListener("click", target => {
      let newEvent = this.createEvent(target);
      this.allEvents.push(newEvent);
      if (this.allEvents.length === this.numOfEvents) {
        //send to the server!!!!!!!!!!;
        this.clearEvents()
      }

    });
  }

}

let tracker = new Tracker(10);









