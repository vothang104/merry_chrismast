const messageGirl = document.querySelector('.message-woman');
const messageBoy = document.querySelector('.message-man');
const soundMessage = document.querySelector('.sound-message');
const btnSkip = document.querySelector('.container__btn-skip');
let interval, timeoutMessage, timeoutMessagesound;
const messageBoyText = [
    'Này e ơi',
    'Anh là người sẽ chăm sóc em cả đời này',
    'Hãy tin ở anh, vì anh sinh ra là để dành cho e',
    'Hãy để anh có cơ hội chăm sóc e nhé',
    'Có được không em'
]
const messageGirlText = [
    'Anh là ai ?',
    'Sao em tin anh được',
    '......',
    '......',
    'Em đồng ý ạ'
]
const app = {
    person: false, // false là trai, true là cô gái
    countboy: 0,
    countGirl: 0,
    showMessage(messageLog, content) {
        messageLog.innerText = content;
        messageLog.style =  `opacity: 1`;
        soundMessage.play();
        timeoutMessagesound = setTimeout(() => {
            soundMessage.currentTime = 0;
            soundMessage.pause();
        }, 1000);
        timeoutMessage = setTimeout(() => {
            messageLog.style = `opacity: 0`;
        }, 4000);
    },
    handleEvent() {
        const _this = this;
        btnSkip.onclick = e => {
        document.getElementById('audio').play();
            clearTimeout(timeoutMessage);
            clearTimeout(timeoutMessagesound);
            messageBoy.style = `opacity: 0`;
            messageGirl.style = `opacity: 0`;
            if(_this.person) {
                _this.showMessage(messageGirl, messageGirlText[_this.countGirl]);
                _this.countGirl++;
                _this.person = !_this.person;
            }else {
                if(_this.countboy == messageBoyText.length) {
                    setTimeout(() => {
                        document.getElementById('link').click();
                    }, 4000)
                    
                }else {
                    _this.showMessage(messageBoy, messageBoyText[_this.countboy]);
                    _this.countboy++;
                    _this.person = !_this.person;
                }
            }
        }
    },
    start() {
        this.handleEvent();
    }
}
app.start();