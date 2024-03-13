const baseUrl = 'http://127.0.0.1:3000'

export function createMemberCard(container, data) {
    const card = document.createElement('div');
    card.setAttribute("class", "border-0 col-6 col-md-3");
    card.innerHTML = `
    <div class="mb-4">
        <img src=${baseUrl}${data.imgUrl} alt="man" class="w-100">
    </div>
    <div class="d-flex gap-2 justify-content-center">
        <div class="d-none d-lg-block">
            <img src=${baseUrl}/images/members/share.png alt="share">
        </div>
        <div>
            <h4 class="card-title">${data.title}</h4>
            <p>${data.content}</p>
        </div>
    </div>
    `
    
    container.appendChild(card);

}

export function createEventCard(container, data) {
    const card = document.createElement('div');
    card.setAttribute("class", "d-flex flex-column flex-sm-row gap-4 border flex-shrink-0 eventCard");
    card.innerHTML = `
    <div class="eventCardPhoto">
        <img src=${baseUrl}${data.imgUrl} alt="meditation" class="w-100 h-100" />
    </div>
    <div class="d-flex flex-column justify-content-around ms-3 ms-sm-0 pt-4 px-3">
        <div class="d-flex flex-column gap-2 mb-2">
            <div>
                    <img src=${baseUrl}/images/events/calendar.png alt="calendar" />
                <span>${data.date}</span>
            </div>
            <div>
                <img src=${baseUrl}/images/events/home.png alt="home">
                <span class="content">${data.location}</span>
            </div>
            <div>
                <img src=${baseUrl}/images/events/time.png alt="clock" />
                <span class="content">${data.time}</span>
            </div>
        </div>
        <h4>${data.title}</h4>
        <p class="card-text content">${data.content}</p>
        <a href="#" class="btn btn-dark buttonWidth px-4 py-2 mb-4">${data.button}</a>
    </div>
    `
    container.appendChild(card);

}

export function createArticleCard(container, data) {
    const card = document.createElement('div');
    card.setAttribute("class", "card flex-shrink-0");
    card.setAttribute("style", "width: 19rem")
    card.innerHTML = `
    <img src=${baseUrl}${data.imgUrl} class="card-img-top" alt="baptism">
    <div class="card-body">
        <h4 class="card-title">${data.title}</h4>
        <p class="card-text">${data.content}</p>
        <div>
            <img src=${baseUrl}${data.userImgUrl} alt="girl">
            <span>${data.readTime}</span>
        </div>
    </div>
    `
    container.appendChild(card);

}