 function run({
    title = '',
    msg = '',
    type = '',
    duration = 3000
 }){
    const main = document.getElementById('toast');
    if(main){
        // Tạo thẻ div có tên là 
        const toast = document.createElement('div');

        toast.onclick = function(e){
            if(e.target.closest('.toast__close')){
                //Xóa toast ra khỏi main
                main.removeChild(toast);
            }
            
        }

        var icons = {
            success: 'fa-solid fa-check',
            error: 'fa-solid fa-circle-exclamation'
        }

        var icon = icons[type];

        var delay = (duration/1000).toFixed(2);

        //Thêm thuộc tính class = "toast" vào trong thẻ div
        toast.classList.add('toast', `toast--${type}`);

        //Thêm thuộc tính làm mờ
        toast.style.animation = ` slideInLeft ease 1s, slideFade linear 1s ${delay}s forwards`;
        
        //Thêm đoạn code html vào trong thẻ div
        toast.innerHTML = 
        `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__tilte">${title}</h3>
                <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        // Thêm toast(thẻ div) vào trong main
        main.appendChild(toast);

        setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);
    }
 }


 function ShowSuccess(){
    run({
        title: 'success',
        msg: 'Thành công chứ sao nữa',
        type: 'success',
        duration: 5000
     });
 }

 function ShowError(){
    run({
        title: 'Error',
        msg: 'Thất bại chứ sao nữa',
        type: 'error',
        duration: 5000
     });
 }

