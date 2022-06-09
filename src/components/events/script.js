window.addEventListener('load', function (){
    new Events();
});

class Events{
    constructor() {
        this.changeAvatarBtns = document.querySelectorAll('[data-event="changeAvatar"]');
        this.addFilesBtns = document.querySelectorAll('[data-event="addFiles"]');
        this.init();
    }

    init(){
        this.changeAvatarBtns.forEach(i=>{
           i.addEventListener('change',(e)=>{
              this.changeAvatar(e.target);
           });
        });

        this.addFilesBtns.forEach(i=>{
            i.addEventListener('change',(e)=>{
                let files = e.target.files;
                if (files.length>0){
                    document.querySelector('.file__btn span').innerText = `Выбрано файлов: ${files.length}`;
                } else{
                    document.querySelector('.file__btn span').innerText = `Прикрепить файлы`;
                }
            });
        });

    }

    changeAvatar(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('.info-avatar__img img').setAttribute('src',e.target.result);
                document.querySelector('.header__avatar img').setAttribute('src',e.target.result);

            };

            reader.readAsDataURL(input.files[0]);

        }
    }
}