        const appEl = document.querySelector('.app');
        const message = document.querySelector('.message');
        const audio = document.getElementById('sound');
        const modal_btn = document.querySelector('.modal__btn');
        const modal = document.querySelector('.modal');
        let interval, countMessage = 0;
        const arrMessage = [
            'Ngoài kia ai cũng có đôi có cặp.',
            'Còn minh thì lại cô đơn một mình :((',
            'Ước gì có ai đó bên cạnh mình lúc này!!!',
            '^^^^^^^^'
        ]
        const app ={
            changeBackground1() {
                setTimeout(() => {
                    message.style = `opacity: 0`;
                    audio.setAttribute('src', './sound/ngua_chay.mp3');
                    audio.play();
                    this.renderSanta1();
                }, 10000);
            },
            changeBackground2() {
                setTimeout(() => {
                    document.querySelector('.modal__Santa-Claus1').remove();
                    this.renderSanta2();
                }, 20000);
            },
            renderSanta1() {
                const htmlSanta = `
                <div class="modal__Santa-Claus1">
                <img src="./img/khungcanh.jpg" alt="" class="modal__Santa-Claus1__background">
                <img src="./img/cuoi_tuan_loc2.gif" alt="" class="modal__Santa-Claus__ridding1">
                <img src="./img/cuoi_tuan_loc.gif" alt="" class="modal__Santa-Claus__ridding2">
                `;
                appEl.insertAdjacentHTML('afterbegin', htmlSanta);
            },
            renderSanta2() {
                const dialogs = [
                    'Không biết cô bé buồn vì điêu gì?',
                    'Ta đến đó thử xem sao'
                ]
                let count = 0, interval1;
                const htmlSanta = `
                <div class="modal__Santa-Claus2">
                    <p class="modal__Santa-Claus2__message">Đằng kia có một cô bé đang buồn</p>
                    <img src="./img/khungcanh2.jpg" alt="" class="modal__Santa-Claus2__background">
                    <img src="./img/cuoi_tuan_loc2.gif" alt="" class="modal__Santa-Claus2__ridding">
                </div>
                `;
                appEl.insertAdjacentHTML('afterbegin', htmlSanta);
                const santa = document.querySelector('.modal__Santa-Claus2__ridding');
                const messageFrame = document.querySelector('.modal__Santa-Claus2__message');
                interval1 = setInterval(() => {
                    messageFrame.innerText = dialogs[count];
                    count++;
                    if(count == dialogs.length) {
                        clearInterval(interval1);
                        setTimeout(() => {
                            messageFrame.remove();
                            santa.style = `transform: skew(23deg, 341deg) translate(-400px, 50px)`;
                        }, 5000);
                        setTimeout(() => {
                            document.getElementById('link').click();
                        }, 7000);
                    }
                }, 5000);
            },

            showMessage() {
                message.style = `opacity: 1`;
                interval = setInterval(() => {
                    message.innerText = arrMessage[countMessage];
                    countMessage++;
                    if(countMessage == arrMessage.length) {
                        clearInterval(interval);
                        this.changeBackground1();
                        this.changeBackground2();
                    }
                }, 4000);
            },
            handleEvent() {
                audio.play();
                setTimeout(() => {
                    this.showMessage();
                }, 3000);
            },
            start() {
                this.handleEvent();
            }
        }
        modal_btn.onclick = e => {
            modal.style = `transform: translateX(-100%)`;
            app.start();
        }