const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalContainer = document.querySelector('.js-modal-container')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')

        //Hàm hiển thị modal mua vé (Thêm class open vào modal)
        function showBuyTickets() {
            //hàm mở model nút buyTickets
            modal.classList.add('open')
        }
        //Hàm ẩn modal mua vé (gỡ bỏ class open của modal)
        function hideBuyTickets() {
            //hàm mở model nút buyTickets
            modal.classList.remove('open')
        }

        //lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        //nghe hành vi click vào button close
        modalClose.addEventListener('click', hideBuyTickets)

        //khi lick ra bên ngoài sẽ đóng modal
        modal.addEventListener('click', hideBuyTickets)


        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

        // menu trên Mobile
        //lấy header
        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;
        // console.log(mobileMenu)
        //Đóng/ mở mobile menu
        mobileMenu.onclick = function() {
            var isClosed =header.clientHeight === headerHeight;
            if(isClosed) {
                header.style.height = 'auto';
            }
            else {
                header.style.height = null;
            }
        }

        //Tự động đóng khi chọn menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++){
            var menuItem = menuItems[i];
            //khi click vao the a bat ky
            menuItem.onclick = function(event) {
                //kiem tra thằng anh chị em liền kề
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if(isParentMenu){
                    event.preventDefault();//bỏ sự kiện click
                }else {
                    header.style.height = null;//ẩn menu
                }
            }
        }
        