document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let modal = document.querySelectorAll('.modal');
    let fixed = document.querySelectorAll('.fixed-action-btn');

    M.Sidenav.init(sidenav);
    M.Modal.init(modal);
    M.FloatingActionButton.init(fixed);
});