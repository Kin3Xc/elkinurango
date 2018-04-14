export default class Render {

    constructor(container) {
        this.bindsEvents();
    }

    // Initialization of events in the app
    bindsEvents() {
        
    }

    // show list in web site
    render(data) {
        console.log(data);
        let jobs = document.querySelector('.jobs');
        let bio = document.querySelector('.summary-bio');

        bio.innerHTML = data.person.summaryOfBio;

        data.jobs.forEach(job => {
            jobs.innerHTML += `
                <div class="job">
                    <h2>${ job.role }</h2>
                    <p>${ job.organizations[0].name }</p>
                    <p>From ${ job.fromMonth } ${ job.fromYear } to ${ job.toMonth || 'Present ' } ${ job.toYear }</p>
                    <a href="">${ job.media[0].mediaItems[0].address }</a>
                </div>
            `;
        })
    }
}