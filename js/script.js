//USER

//COMPONENTS


// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),

}

window.addEventListener("load", function () {

    $('.input[type="tel"]').inputmask("+7(999)999-99-99");

});

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
//# sourceMappingURL=script.js.map