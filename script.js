function display(sectionId){

    const pages = document.querySelectorAll('.page');

    pages.forEach(page=>{
        page.classList.add('d-none');
    });

    document.getElementById(sectionId).classList.remove('d-none');
}
